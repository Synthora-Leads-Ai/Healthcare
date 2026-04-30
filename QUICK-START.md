# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: `http://localhost:5173`

---

## 📱 What You'll See

The website includes:

### Home Page (/)
- Hero section with clinic info and doctor profile
- Services overview (Physiotherapy & Home Healthcare)
- Why Choose Us section with 8 USPs
- Patient testimonials with ratings
- Contact section with map

### Services Page (/services)
- Detailed physiotherapy services (6 categories)
- Home healthcare services (6 types)
- Conditions treated (15+ conditions)
- Call-to-action section

### About Page (/about)
- Mission statement
- Doctor profile (Dr. Arvind Soni)
- Core values
- Statistics and achievements

### Contact Page (/contact)
- Phone numbers and WhatsApp
- Email address
- Clinic location with Google Maps
- Working hours
- Quick info cards

---

## 🎨 Customization

### Update Clinic Information
Edit `src/config/clinicInfo.js`:
- Contact details
- Address
- Services
- Testimonials
- Doctor information

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  medical: {
    // Your custom colors
  }
}
```

### Modify Content
- Components: `src/components/`
- Pages: `src/pages/`
- Styles: `src/index.css`

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---

## 📦 Key Features

✅ Fully responsive design
✅ Modern animations with Framer Motion
✅ WhatsApp integration
✅ Google Maps integration
✅ Click-to-call functionality
✅ SEO optimized
✅ Fast loading with Vite
✅ Accessible UI components

---

## 🔧 Tech Stack

- **React 19** - Latest React version
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

---

## 📞 Contact Integration

The website includes:
- **Phone Links**: Click to call directly
- **WhatsApp**: Pre-filled message integration
- **Email**: mailto: links
- **Google Maps**: Embedded location
- **Floating Action Buttons**: Always accessible

---

## 🎯 Next Steps

1. **Customize Content**: Update clinic info in config file
2. **Add Images**: Replace placeholder images with real photos
3. **Test Thoroughly**: Check all links and functionality
4. **Deploy**: Follow DEPLOYMENT.md guide
5. **Add Analytics**: Integrate Google Analytics
6. **SEO**: Submit to Google Search Console

---

## 💡 Tips

- All phone numbers are clickable (tel: links)
- WhatsApp opens with pre-filled message
- Map is interactive and shows exact location
- Floating buttons stay visible while scrolling
- All animations are optimized for performance

---

## 🐛 Troubleshooting

### Port already in use?
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Check Node version (should be 18+)
node --version

# Update dependencies
npm update
```

---

## 📚 Documentation

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

## ✨ Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions to:
- Vercel (Recommended)
- Netlify
- GitHub Pages
- Traditional Hosting

---

**Built with ❤️ for Soni Physiotherapy Centre**
