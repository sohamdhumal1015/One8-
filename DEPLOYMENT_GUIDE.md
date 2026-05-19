# 🚀 ONE8 Website — GitHub Pages Deployment Guide

## Step 1: Create a GitHub Account
1. Go to **https://github.com**
2. Click **"Sign up"** and create your free account
3. Verify your email address

---

## Step 2: Create a New Repository
1. After logging in, click the **"+"** icon in the top-right corner
2. Select **"New repository"**
3. Fill in the details:
   - **Repository name:** `one8-website` (or any name you like)
   - **Description:** ONE8 Premium Fashion E-Commerce Website
   - Set to **Public** (required for free GitHub Pages)
   - ✅ Check **"Add a README file"**
4. Click **"Create repository"**

---

## Step 3: Upload Your Website Files
### Option A — Upload via GitHub website (Easiest)
1. Open your repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
4. Scroll down, add a commit message like: `Add ONE8 website files`
5. Click **"Commit changes"**

### Option B — Using Git (Advanced)
```bash
# 1. Install Git from https://git-scm.com
# 2. Open terminal/command prompt in your project folder

git init
git add .
git commit -m "Add ONE8 website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/one8-website.git
git push -u origin main
```

---

## Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** tab
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and folder **"/ (root)"**
5. Click **"Save"**

---

## Step 5: Access Your Live Website
1. GitHub will show a message: *"Your site is live at..."*
2. Wait **2–5 minutes** for deployment
3. Your website will be live at:
   ```
   https://YOUR_USERNAME.github.io/one8-website/
   ```
4. Share this URL with anyone!

---

## Step 6: Custom Domain (Optional, Free!)
If you want `www.one8store.com` instead of the GitHub URL:

1. Buy a domain from **Namecheap**, **GoDaddy**, or **Google Domains**
2. In your repository, create a file named `CNAME` with just your domain:
   ```
   one8store.com
   ```
3. In your domain registrar's DNS settings, add:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `YOUR_USERNAME.github.io`
4. Wait 24–48 hours for DNS propagation

---

## 🔄 Updating Your Website
Whenever you make changes to your files:
1. Upload the updated file to GitHub (via the website or git)
2. GitHub Pages automatically rebuilds and publishes within ~2 minutes

---

## 📁 Recommended File Structure
```
one8-website/
├── index.html       ← Main HTML file
├── style.css        ← All styles
├── script.js        ← All JavaScript
├── README.md        ← This guide
└── assets/
    ├── images/      ← Your product images
    └── icons/       ← Custom icons
```

---

## 🖼️ Adding Real Product Images
Replace emoji placeholders with real images:
1. Add images to `assets/images/` folder
2. In `style.css`, replace the emoji CSS with:
   ```css
   .product-img-inner {
     background-image: url('assets/images/product-1.jpg');
     background-size: cover;
     background-position: center;
   }
   ```
3. Or in `script.js`, change `emoji: '👟'` to use `<img>` tags

---

## ✅ Checklist Before Going Live
- [ ] All 3 files uploaded: `index.html`, `style.css`, `script.js`
- [ ] GitHub Pages enabled in Settings
- [ ] Website loads correctly at your GitHub Pages URL
- [ ] Test on mobile (use Chrome DevTools → F12 → toggle device toolbar)
- [ ] Test cart functionality
- [ ] Update contact info with your real details
- [ ] Replace placeholder Google Maps embed with your actual location

---

## 🆘 Troubleshooting
| Problem | Solution |
|---------|---------|
| Website shows 404 | Make sure file is named exactly `index.html` |
| Styles not loading | Check `style.css` is uploaded and filename is exact |
| Changes not showing | Wait 2–5 min, or hard-refresh with Ctrl+Shift+R |
| Map not showing | Replace the iframe src with your actual Google Maps embed code |

---

*ONE8 — Own Your Style. Built with ❤️ in India.*
