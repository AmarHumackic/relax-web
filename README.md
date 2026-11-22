# Relax Apartments Stolac

The website for **Relax Apartments**, a family-run holiday rental with two apartments in Stolac, Bosnia and Herzegovina. Guests can browse the apartments, view the photo gallery, read about local attractions and send a booking enquiry directly.

🌐 **Live:** [relaxstolac.com](https://relaxstolac.com)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Bilingual (English / Bosnian)**: built with `next-intl`. English is served without a prefix and Bosnian under `/bs`. Custom middleware picks Bosnian for visitors whose browser prefers `bs`, `hr` or `sr`.
- **Booking enquiry form**: date pickers for check-in and check-out, apartment selection and a guest limit for each apartment. Enquiries go to a Next.js API route that sends them by email through Nodemailer.
- **Photo gallery**: filterable by apartment, with a full-screen lightbox.
- **Pages**: Home, Gallery, Amenities, Attractions and Contact, plus a custom 404 page.
- **SEO**
  - Metadata for each page and locale: title, description, canonical URL, `hreflang` alternates, Open Graph and Twitter cards
  - Schema.org structured data (`LodgingBusiness` with reviews and ratings, plus `FAQPage`)
  - Generated `sitemap.xml` with language alternates, `robots.txt` and a web app manifest
- **Performance**: WebP/AVIF images through `next/image`, long-lived cache headers for static assets, optimized package imports and inlined critical CSS.
- **Security headers**: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **Accessibility**: semantic markup, labelled form controls and ARIA attributes on interactive elements.
- **Analytics**: Google Analytics 4, loaded only when a measurement ID is configured.

## Tech stack

| Area       | Tools                                                    |
| ---------- | -------------------------------------------------------- |
| Framework  | Next.js 15 (App Router), React 19                        |
| Language   | TypeScript                                               |
| Styling    | Tailwind CSS 4                                           |
| i18n       | next-intl                                                |
| Email      | Nodemailer (Gmail SMTP)                                  |
| UI         | react-datepicker, yet-another-react-lightbox, react-icons |
| Tooling    | ESLint, Prettier (with `prettier-plugin-tailwindcss`)    |

## Project structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages (home, gallery, amenities, attractions, contact)
│   ├── api/contact/       # Booking enquiry endpoint (sends email)
│   └── sitemap.ts         # Generated sitemap with hreflang alternates
├── components/            # UI sections and shared components
├── constants/             # Business info, links, apartment capacity
├── i18n/                  # next-intl routing and request config
├── lib/seo.ts             # Metadata helpers and metadata for each page
├── messages/              # Translations (en.json, bs.json)
├── middleware.ts          # Locale detection from Accept-Language
└── styles/
```

## Getting started

**Requirements:** Node.js 18.18 or newer and npm.

```bash
git clone https://github.com/AmarHumackic/relax-web.git
cd relax-web
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable                     | Description                                                     |
| ---------------------------- | --------------------------------------------------------------- |
| `CONTACT_GMAIL_USER`         | Gmail address used to send booking enquiries                    |
| `CONTACT_GMAIL_APP_PASSWORD` | [Google app password](https://support.google.com/accounts/answer/185833) for that account |
| `GA_MEASUREMENT_ID`          | Google Analytics 4 measurement ID (optional)                    |

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint               |

## License

The source code is released under the [MIT License](LICENSE). The project was originally started from the open-source [Startup Next.js template](https://github.com/NextJSTemplates/startup-nextjs), also MIT-licensed.

Photos, logos, texts and other content about Relax Apartments are **not** covered by the MIT License and may not be reused without permission.
