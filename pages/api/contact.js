import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, company, email, service, brief, subject } = req.body

  if (!firstName || !email || !brief) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Determine encryption/secure settings
  let secure = process.env.SMTP_SECURE === 'true';
  if (process.env.SMTP_ENCRYPTION) {
    const enc = process.env.SMTP_ENCRYPTION.toLowerCase();
    if (enc === 'ssl' || enc === 'tls') {
      secure = true;
    } else if (enc === 'none' || enc === 'false') {
      secure = false;
    }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

    const mailOptions = {
      from: `SIMFAH Global <${process.env.SMTP_FROM}>`, // display name in inbox
      to: process.env.SMTP_FROM,
      subject: subject
        ? `${subject} — ${firstName} ${lastName}`
        : `New Enquiry — ${service} from ${firstName} ${lastName}`,
      text:
        `You have received a new message from the website contact form.\n\n` +
        `Name:     ${firstName} ${lastName}\n` +
        `Company:  ${company || 'N/A'}\n` +
        `Email:    ${email}\n` +
        `Service:  ${service || 'N/A'}\n` +
        (subject ? `Subject:  ${subject}\n` : '') +
        `\nMessage:\n${brief}`,
      replyTo: email, // so replies go to the user
    }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Mail send error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error && error.message ? error.message : error });
  }
}
