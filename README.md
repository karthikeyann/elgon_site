# Elgon Systems & Controls - Static Website

This directory contains the static HTML version of the Elgon Systems & Controls website, converted from PHP for GitHub Pages hosting.

## Quick Start

### Deploy to GitHub Pages

1. Create a new GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit - Elgon static site"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Source: Select branch `main`
   - Folder: Select `/` (root)
   - Click Save

3. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Test Locally

**Using Python:**
```bash
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
npx http-server
```

**Using PHP (if available):**
```bash
php -S localhost:8000
```

## Site Structure

- `index.html` - Home page
- `aboutus.html` - About Us page
- `products.html` - Products page
- `gallery.html` - Photo Gallery
- `enquiry.html` - Enquiry form (non-functional without backend)
- `contactus.html` - Contact information
- `services.html` - Services page

## Features

✅ Responsive Bootstrap design  
✅ Image carousel slider  
✅ Photo gallery with lightbox  
✅ FontAwesome icons  
✅ Mobile-friendly navigation

## Known Limitations

❌ **Enquiry form** - Requires external service (Formspree, EmailJS, etc.)  
❌ **Active navigation highlighting** - Manually set per page (was PHP dynamic)

## Adding Form Functionality

To make the enquiry form work, use one of these services:

### Option 1: Formspree
1. Sign up at https://formspree.io
2. Update the form tag in `enquiry.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Add EmailJS SDK and configure
3. See: https://www.emailjs.com/docs/

## License

All rights reserved - Elgon System & Controls © 2014

## Support

For technical questions about the conversion, see `conversion_report.md` for detailed information about changes made during PHP to HTML conversion.

