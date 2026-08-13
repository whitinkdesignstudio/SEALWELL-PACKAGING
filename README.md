# Sealwell Packaging — Modern Next.js Website

Official website and digital catalog for **Sealwell Packaging**, Ahmedabad manufacturer of 13 mm and 20 mm pharmaceutical flip-off seals and aluminium vial closures in 25 standard colours.

---

## Project Overview

- **Framework**: Next.js 16 App Router (React 19, TypeScript)
- **Styling**: Tailwind CSS v4, Framer Motion
- **Deployment Platform**: Vercel (Production Ready)
- **Form Service**: Web3Forms Integration (`InquiryForm`)

---

## Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. **Start Local Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run Production Build Verification**
   ```bash
   npm run build
   ```

5. **Linting Check**
   ```bash
   npm run lint
   ```

---

## Project Structure

```text
sealwell-packaging/
├── app/
│   ├── about/
│   │   └── page.tsx            # About Sealwell Packaging
│   ├── colours/
│   │   └── page.tsx            # 25 Standard SW Colour Selection
│   ├── components/             # Reusable UI Components
│   │   ├── ClientLogosMarquee.tsx
│   │   ├── ColourSelectionSection.tsx
│   │   ├── InquiryForm.tsx
│   │   ├── ProductFeaturesSection.tsx
│   │   ├── ScrollExperience.tsx
│   │   ├── SiteChrome.tsx      # Layout, Header, Footer, Brand, Hero
│   │   ├── SuitableApplicationsSection.tsx
│   │   └── WhyChooseSection.tsx
│   ├── contact/
│   │   └── page.tsx            # Contact & Factory Map Page
│   ├── data/
│   │   ├── clientLogos.ts      # Client Logo Marquee Data
│   │   └── site.ts             # Products & SW Colours Master Data
│   ├── products/
│   │   ├── [slug]/
│   │   │   └── page.tsx        # Dynamic Product Detail Pages
│   │   └── page.tsx            # Flip-Off Seal Catalog Page
│   ├── quality/
│   │   └── page.tsx            # Manufacturing Quality & Standards
│   ├── globals.css             # Design Tokens & Styles
│   ├── layout.tsx              # Root Layout & Metadata
│   └── page.tsx                # Homepage
├── public/
│   └── assets/                 # High-resolution logos, banners & product images
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore config
├── next.config.mjs             # Next.js & Turbopack configuration
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment preset configuration
└── README.md                   # Project documentation
```

---

## Step-by-Step Vercel Deployment Guide

To deploy this website directly to Vercel:

### Step 1: Push Code to GitHub
Ensure all workspace files are committed and pushed to your GitHub repository:
```bash
git add .
git commit -m "Configure Sealwell Packaging for zero-error Vercel deployment"
git push origin main
```

### Step 2: Log in to Vercel
Go to [vercel.com](https://vercel.com) and log in with your account.

### Step 3: Import Project
1. Click **Add New...** → **Project**.
2. Select your GitHub repository (`sealwell-packaging` or `sealwell-packaging-react-source`).

### Step 4: Configure Project Settings
- **Framework Preset**: Vercel will automatically detect **Next.js**.
- **Root Directory**: `./` (leave default).
- **Build Command**: `npm run build` (or `next build`).
- **Output Directory**: `.next` (leave default).

### Step 5: Environment Variables (Optional)
Under **Environment Variables**, add any custom variables if required (see `.env.example`):
- `WEB3FORMS_ACCESS_KEY` = `678151bf-5772-43a8-9d9b-137e0a5921a7`
- `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`

### Step 6: Deploy
Click **Deploy**. Vercel will build and deploy the project in under 60 seconds.

### Step 7: Verify Live Deployment
Once deployed, click on your live `.vercel.app` URL and verify:
- Homepage (`/`) loads smoothly with full marquee animations.
- Inner pages (`/about`, `/products`, `/quality`, `/colours`, `/contact`) navigate cleanly without 404 errors when directly refreshed.
- Dynamic route URLs (`/products/13-mm`, `/products/20-mm`, `/products/13-mm-flip-off-seal`, `/products/20-mm-flip-off-seal`) work seamlessly.
- Inquiry form submits enquiries directly to Sealwell Packaging.
