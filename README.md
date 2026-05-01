

# SIMFAH Global — Next.js App

SIMFAH Global delivers cutting-edge solutions in:


Our Core Capabilities:

- Artificial Intelligence & Machine Learning
- Web & Mobile App Development
- Web Design
- ERP, CRM, Payroll, HR, POS
- Real Estate Management
- Crypto Trading Platforms
- Tourism, Booking & Itinerary Management
- Cloud-based and On-premise Solutions

## Project Structure

```
simfah-nextjs/
├── app/
│   ├── globals.css        # All styles (CSS variables, animations, responsive)
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── Cursor.tsx         # Custom animated cursor
│   ├── Navbar.tsx         # Fixed nav with scroll detection
│   ├── Hero.tsx           # Hero section + canvas animations (fire + neural web)
│   ├── Marquee.tsx        # Scrolling ticker
│   ├── Services.tsx       # 6 service cards
│   ├── Stats.tsx          # Animated counters
│   ├── About.tsx          # About section + neural canvas
│   ├── Tech.tsx           # Technology grid
│   ├── Process.tsx        # 5-step process
│   ├── WhyUs.tsx          # Why us + orbit dots animation
│   ├── Testimonials.tsx   # 3 testimonial cards
│   ├── CTA.tsx            # Call to action
│   ├── Contact.tsx        # Contact form (mailto — no API key needed)
│   ├── Footer.tsx         # Footer
│   └── ScrollReveal.tsx   # Scroll-triggered reveal animations
└── public/
	└── simfah-logo.png    # ← Place your logo here
```

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Add Your Logo

Place your `simfah-logo.png` in the `/public` folder.
Fallback placeholder images are used if the file is missing.

## Contact Form

The contact form uses `mailto:` — zero backend, zero API key required.
When a visitor submits, their default email app opens with all fields pre-filled,
addressed to `hello@simfahglobal.com`.

To change the recipient email, edit line 5 of `components/Contact.tsx`:
```ts
const TO = 'hello@simfahglobal.com'
```

## Build for Production

```bash
npm run build
npm start
```
