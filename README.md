# Shivendra.ai

Production-ready personal website for Shivendra Pratap Singh, built with Next.js.

## What is included

- Modern responsive Next.js app
- SEO metadata, Open Graph, sitemap, and robots route
- Premium hero imagery and event/build card assets
- Scroll reveal animations, hover states, and quote carousel
- Server-side contact form powered by a Next.js API route and Nodemailer
- Content separated in `lib/siteData.js` for easy updates

## Local setup

```bash
cd shivendra-ai-site
npm install
npm run dev
```

Open `http://localhost:3000`.

Create `.env.local` before running locally:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password-or-app-password
CONTACT_TO_EMAIL=shivendra286@gmail.com
CONTACT_FROM_EMAIL=your-smtp-username
```

If you use Gmail SMTP, `SMTP_PASS` should be a Google App Password, not your main account password.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Keep the defaults:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add these environment variables in **Project Settings > Environment Variables**:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
6. Add `shivendra.ai` in **Project Settings > Domains**.
7. Update DNS as Vercel instructs.

Example Vercel values:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password-or-app-password
CONTACT_TO_EMAIL=shivendra286@gmail.com
CONTACT_FROM_EMAIL=your-smtp-username
```

## Deploy to GitHub Pages

This site is designed for Vercel first. For GitHub Pages, enable static export:

1. Edit `next.config.mjs`:

```js
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

2. Build the static site:

```bash
npm run build
```

3. Publish the generated `out` folder with GitHub Pages.

If hosting at `https://username.github.io/repo-name`, add `basePath: "/repo-name"` and `assetPrefix: "/repo-name"` to `next.config.mjs`.

## Updating content

Edit `lib/siteData.js` to update:

- Navigation
- Public presence cards
- Articles and mentions
- Podcasts/media
- Ideas/builds
- Quotes
- Social links

Replace image files in `public/images` with optimized `.png`, `.jpg`, or `.webp` assets using the same filenames, or update the paths in `lib/siteData.js`.

## Contact form

The contact form now posts to `/api/contact`, which sends mail server-side with Nodemailer. Secrets stay on the server through environment variables and are never exposed in the client bundle.
