# Deployment Guide

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment for Vite + React applications.

#### Steps:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite settings
7. Click "Deploy"

Your site will be live in minutes with automatic HTTPS and global CDN.

#### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

Another excellent option with similar ease of use.

#### Steps:

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/soni-physiotherapy",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/soni-physiotherapy/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Traditional Web Hosting (cPanel/FTP)

For traditional hosting providers.

#### Steps:

1. Build the project:
```bash
npm run build
```

2. Upload contents of `dist` folder to your hosting:
   - Via FTP client (FileZilla)
   - Via cPanel File Manager
   - Upload to `public_html` or `www` directory

3. Configure `.htaccess` for React Router:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Pre-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify contact information is correct
- [ ] Test on mobile devices
- [ ] Check all images load properly
- [ ] Test WhatsApp and phone links
- [ ] Verify Google Maps integration
- [ ] Run production build locally: `npm run build && npm run preview`
- [ ] Check browser console for errors
- [ ] Test form submissions (if any)
- [ ] Verify SEO meta tags

---

## Environment Variables

If you need to add environment variables:

1. Create `.env` file:
```
VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_KEY=your_key
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. For production, add variables in hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

---

## Performance Optimization

Already implemented:
- ✅ Code splitting with React Router
- ✅ Lazy loading with Framer Motion
- ✅ Optimized images
- ✅ Minified CSS and JS
- ✅ Tree-shaking with Vite

Additional optimizations:
- Consider adding image optimization (sharp, imagemin)
- Enable Brotli compression on server
- Add service worker for offline support (optional)

---

## Custom Domain Setup

### For Vercel/Netlify:
1. Add domain in platform settings
2. Update DNS records:
   - A record: Point to platform IP
   - CNAME: www → your-site.vercel.app

### For Traditional Hosting:
1. Point domain to hosting nameservers
2. Update A record to hosting IP
3. Add www CNAME if needed

---

## SSL Certificate

- **Vercel/Netlify**: Automatic HTTPS (Let's Encrypt)
- **Traditional Hosting**: 
  - Use cPanel AutoSSL
  - Or install Let's Encrypt manually
  - Or purchase SSL certificate

---

## Monitoring & Analytics

Consider adding:
- Google Analytics
- Google Search Console
- Facebook Pixel (if running ads)
- Hotjar for user behavior

---

## Support

For deployment issues:
- Check build logs in hosting platform
- Verify Node.js version compatibility
- Ensure all dependencies are installed
- Check for console errors in browser

---

## Backup

Always keep backups:
- Source code on GitHub
- Database backups (if applicable)
- Regular exports of content
- DNS records documentation
