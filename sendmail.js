// Simple Node.js email sender using Nodemailer and SMTP
// Usage: node sendmail.js

const nodemailer = require('nodemailer');

// Replace these with your SMTP server details
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // e.g. smtp.gmail.com
  port: 465, // 465 for SSL, 587 for TLS
  secure: true, // true for 465, false for 587
  auth: {
    user: 'your_username',
    pass: 'your_password',
  },
});

const mailOptions = {
  from: 'your@email.com', // sender address
  to: 'recipient@email.com', // recipient address
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email sent from a standalone Node.js script using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.messageId);
});
