# Deployment Guide for Elgon Systems & Controls Website

## Prerequisites

- A GitHub account
- Git installed on your computer
- (Optional) A custom domain name

---

## Option 1: Deploy to GitHub Pages (Recommended)

### Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `elgon-website`)
4. Choose "Public" visibility (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push Your Code

Open Terminal/Command Prompt in this directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Elgon static website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (gear icon)
3. Scroll down and click "Pages" in the left sidebar
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/` (root)
5. Click "Save"

### Step 4: Access Your Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

GitHub will show you the exact URL in the Pages settings.

---

## Option 2: Deploy to Netlify

### Quick Deploy via Drag & Drop

1. Go to https://www.netlify.com
2. Sign up for a free account
3. Drag and drop this entire `static_html` folder onto the Netlify dashboard
4. Your site will be live instantly with a random URL like `random-name-12345.netlify.app`
5. You can change the name in site settings

### Benefits of Netlify:
- ✅ Working forms (Netlify Forms - no backend needed!)
- ✅ Instant HTTPS
- ✅ Continuous deployment from Git
- ✅ Custom domain support

To enable the enquiry form on Netlify:
1. Add `netlify` attribute to your form tag in `enquiry.html`:
```html
<form class="form-horizontal" netlify>
```
2. Redeploy the site
3. Form submissions will appear in Netlify dashboard

---

## Option 3: Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed instantly

---

## Custom Domain Setup

### For GitHub Pages:

1. Add a file named `CNAME` to your repository root:
```
www.yourdomain.com
```

2. In your domain registrar's DNS settings, add:
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`

3. In GitHub Pages settings, enter your custom domain

### For Netlify:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to update your DNS

---

## Testing Locally Before Deployment

### Using Python (Recommended):
```bash
python3 -m http.server 8000
```
Open: http://localhost:8000

### Using PHP:
```bash
php -S localhost:8000
```

### Using Node.js:
```bash
npx http-server
```

### Using VS Code:
Install "Live Server" extension, right-click `index.html` → "Open with Live Server"

---

## Enable Form Functionality

The enquiry form currently doesn't work. Choose one solution:

### Option A: Use Formspree (Easy)

1. Sign up at https://formspree.io (free tier available)
2. Create a new form
3. Get your form endpoint
4. Update `enquiry.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="form-horizontal" role="form">
```

### Option B: Use EmailJS (No Backend)

1. Sign up at https://www.emailjs.com
2. Set up email service
3. Add EmailJS SDK to your page
4. Configure form submission via JavaScript

See: https://www.emailjs.com/docs/

### Option C: Use Netlify Forms (If hosting on Netlify)

Add `netlify` attribute to your form:
```html
<form netlify class="form-horizontal" role="form">
```

---

## Add Google Analytics (Optional)

Replace the commented-out Hosting24 analytics with Google Analytics:

1. Sign up for Google Analytics
2. Get your tracking code
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
<!-- End Google Analytics -->
```

---

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages, Netlify, and Vercel will automatically rebuild and deploy.

---

## Troubleshooting

### Issue: Images not loading
- Check that file paths are relative (no leading `/`)
- Verify images exist in the correct directories
- Check browser console for errors

### Issue: CSS not applying
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check Network tab in browser dev tools
- Verify CSS file paths

### Issue: Pages show 404
- Ensure all links use `.html` extension (not `.php`)
- Check that file names match exactly (case-sensitive on Linux)

### Issue: Form not working
- See "Enable Form Functionality" section above
- Forms won't work without a backend service

---

## Security Notes

✅ All HTTP links converted to HTTPS  
✅ No PHP execution (static files only)  
✅ No database connectivity  
✅ No server-side code  

The site is now completely static and secure for hosting on any platform.

---

## Support

For technical questions:
- See `conversion_report.md` for detailed conversion information
- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Check Netlify documentation: https://docs.netlify.com

---

## Site Information

**Company:** Elgon System & Controls  
**Original Site:** PHP-based dynamic website  
**Converted:** November 2, 2025  
**Format:** Static HTML/CSS/JavaScript  
**Compatible With:** GitHub Pages, Netlify, Vercel, any static hosting  

**Pages:**
- Home (index.html)
- About Us (aboutus.html)
- Products (products.html)
- Gallery (gallery.html)
- Enquiry (enquiry.html)
- Contact Us (contactus.html)
- Services (services.html)

---

Good luck with your deployment! 🚀

