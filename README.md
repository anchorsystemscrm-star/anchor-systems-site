# Anchor Systems Website

Production-ready Next.js 14 marketing website for Anchor Systems, built with the App Router, TypeScript, and Tailwind CSS.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Create a `.env.local` file if you want canonical URLs and sitemap links to use your production domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial Anchor Systems website"
git branch -M main
git remote add origin https://github.com/your-org/your-repo.git
git push -u origin main
```

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Keep the default Next.js framework settings.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings to match the production domain.
4. Deploy.

## Connect a Namecheap domain

1. In Vercel, add your custom domain to the project.
2. In Namecheap, point the root domain to Vercel using the A record Vercel provides.
3. Point `www` to Vercel using the CNAME target Vercel provides.
4. Wait for DNS propagation, then verify the domain in Vercel.
