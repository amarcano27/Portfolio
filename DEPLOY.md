# Portfolio Deployment Guide

This guide covers multiple options for hosting your portfolio publicly.

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Steps:
1. Create a new GitHub repository (e.g., `portfolio` or `adrian-marcano-portfolio`)
2. Initialize git in the portfolio folder:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
3. Connect to GitHub and push:
   ```bash
   git remote add origin https://github.com/amarcano27/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch and **/ (root)** folder
   - Click **Save**
5. Your portfolio will be live at: `https://amarcano27.github.io/portfolio`

**Pros:** Free, easy, integrates with GitHub, custom domain support
**Cons:** Public repository (unless you pay for private repos)

---

## Option 2: Netlify (Free & Fast)

### Steps:
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag and drop your `portfolio` folder onto Netlify's dashboard
3. Or connect your GitHub repository for automatic deployments
4. Your site will be live immediately with a URL like: `https://random-name-123.netlify.app`
5. You can add a custom domain in Settings → Domain management

**Pros:** Free, fast CDN, automatic HTTPS, easy custom domains, continuous deployment
**Cons:** None really - it's excellent for static sites

---

## Option 3: Vercel (Free & Modern)

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy from your portfolio folder:
   ```bash
   cd portfolio
   vercel
   ```
4. Or connect your GitHub repository for automatic deployments
5. Your site will be live at: `https://your-project.vercel.app`

**Pros:** Free, excellent performance, automatic HTTPS, great for modern web apps
**Cons:** Slightly more complex than Netlify for simple static sites

---

## Option 4: Cloudflare Pages (Free & Fast CDN)

### Steps:
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up
2. Connect your GitHub repository
3. Select your portfolio repository
4. Build settings: Leave blank (static site)
5. Deploy!

**Pros:** Free, fast global CDN, unlimited bandwidth, custom domains
**Cons:** Requires GitHub repository

---

## Option 5: Surge.sh (Simple & Quick)

### Steps:
1. Install Surge:
   ```bash
   npm install -g surge
   ```
2. Deploy from your portfolio folder:
   ```bash
   cd portfolio
   surge
   ```
3. Follow the prompts to create an account and choose a domain
4. Your site will be live at: `https://your-chosen-name.surge.sh`

**Pros:** Free, very simple, quick deployment
**Cons:** Less features than other options

---

## Option 6: Firebase Hosting (Google's Solution)

### Steps:
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login and initialize:
   ```bash
   firebase login
   cd portfolio
   firebase init hosting
   ```
3. Deploy:
   ```bash
   firebase deploy
   ```

**Pros:** Free tier, reliable, integrates with other Firebase services
**Cons:** More setup required

---

## Custom Domain Setup

All the above services support custom domains. To use `adrianmarcano.com`:

1. Purchase a domain from:
   - [Namecheap](https://namecheap.com)
   - [Google Domains](https://domains.google)
   - [Cloudflare Registrar](https://cloudflare.com/products/registrar)

2. Add DNS records in your domain provider:
   - For GitHub Pages: Add CNAME record pointing to `yourusername.github.io`
   - For Netlify/Vercel: Follow their domain setup instructions

3. Configure in your hosting provider's dashboard

---

## Quick Comparison

| Service | Free Tier | Ease of Use | Custom Domain | Best For |
|---------|-----------|-------------|---------------|----------|
| GitHub Pages | ✅ | ⭐⭐⭐⭐⭐ | ✅ | Developers with GitHub |
| Netlify | ✅ | ⭐⭐⭐⭐⭐ | ✅ | Static sites, easiest |
| Vercel | ✅ | ⭐⭐⭐⭐ | ✅ | Modern web apps |
| Cloudflare Pages | ✅ | ⭐⭐⭐⭐ | ✅ | Fast global CDN |
| Surge.sh | ✅ | ⭐⭐⭐⭐⭐ | ✅ | Quick deployments |
| Firebase | ✅ | ⭐⭐⭐ | ✅ | Google ecosystem |

---

## Recommendation

**Start with GitHub Pages** - It's free, easy, and you already use GitHub. If you want more features or better performance, try **Netlify** next.

---

## Next Steps

1. Choose a hosting provider
2. Deploy your portfolio
3. Share the link on your LinkedIn, resume, and GitHub profile
4. Consider purchasing a custom domain for a professional touch
