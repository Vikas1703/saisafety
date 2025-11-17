# Netlify Deployment Guide

This guide will help you deploy the Sai Safety System website to Netlify.

## ✅ Prerequisites

- A [GitHub](https://github.com), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org) account
- A [Netlify](https://www.netlify.com) account (free tier is sufficient)
- Git installed on your computer

## 🚀 Deployment Steps

### Method 1: Deploy via Git (Recommended)

This method enables automatic deployments whenever you push changes to your repository.

#### Step 1: Push Code to Git Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Sai Safety System website"

# Add your remote repository
git remote add origin https://github.com/your-username/sai-safety-system.git

# Push to main branch
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your `sai-safety-system` repository

#### Step 3: Configure Build Settings

Netlify will automatically detect the settings from `netlify.toml`, but verify:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at a random Netlify URL (e.g., `https://random-name-123.netlify.app`)

#### Step 5: Custom Domain (Optional)

1. In Netlify dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `saisafetysystem.com`)
4. Follow the instructions to update your DNS settings
5. Netlify will automatically provision an SSL certificate

### Method 2: Manual Deploy (Drag & Drop)

For quick deployment without Git:

#### Step 1: Build Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

#### Step 2: Deploy to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Scroll down to **"Want to deploy a new site without connecting to Git?"**
3. Drag and drop the `dist/public` folder onto the upload area
4. Wait for deployment to complete
5. Your site is now live!

**Note**: Manual deployment requires rebuilding and re-uploading for every update. Git method is recommended for easier updates.

## 🔧 Configuration Details

### Build Configuration (netlify.toml)

The project includes a `netlify.toml` file with optimized settings:

```toml
[build]
  command = "npm run build"
  publish = "dist/public"
  NODE_VERSION = "20"

[build.environment]
  NODE_ENV = "production"

# Client-side routing support
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Asset caching
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### What This Configuration Does

1. **Redirects**: Ensures all routes work with client-side routing (React Router/Wouter)
2. **Security Headers**: Adds protection against XSS, clickjacking, and other attacks
3. **Caching**: Optimizes asset loading with proper cache headers
4. **Node Version**: Uses Node.js 20 for build consistency

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work (Home, Services, About, etc.)
- [ ] Images load properly
- [ ] Contact form submits (if backend is added later)
- [ ] Mobile responsiveness
- [ ] All pages have correct titles and meta descriptions
- [ ] Custom domain is working (if configured)
- [ ] HTTPS is enabled (automatic with Netlify)

## 🎯 Continuous Deployment

With Git-based deployment, Netlify automatically deploys when you push to the main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update services pricing"
git push

# Netlify will automatically:
# 1. Detect the push
# 2. Run npm run build
# 3. Deploy the new version
# 4. Your site is updated in 2-3 minutes!
```

## 🔄 Deploy Previews

Netlify automatically creates preview deployments for:
- Pull requests (test before merging)
- Other branches (test features in isolation)

Each preview gets a unique URL for testing.

## 📈 Performance Optimization

Netlify automatically provides:
- ✅ Global CDN (Content Delivery Network)
- ✅ Automatic HTTPS/SSL certificates
- ✅ HTTP/2 support
- ✅ Asset optimization
- ✅ Gzip/Brotli compression

Expected performance:
- **Load time**: < 2 seconds
- **Lighthouse score**: 90+ (all categories)
- **First Contentful Paint**: < 1 second

## 🐛 Troubleshooting

### Build Fails

**Error: "Command failed with exit code 1"**

Solution:
```bash
# Test build locally first
npm run build

# Fix any TypeScript or build errors
npm run check

# Commit and push again
git add .
git commit -m "Fix build errors"
git push
```

### Routes Don't Work (404 on Refresh)

**Problem**: Direct navigation to `/services` returns 404

**Solution**: This should be automatically fixed by the redirect rule in `netlify.toml`. If not:

1. Check `netlify.toml` is in the root directory
2. Verify the redirect rule is present
3. Redeploy the site

### Images Not Loading

**Problem**: Images show broken links

**Solution**:
1. Verify images are in `attached_assets/` folder
2. Check import paths use `@assets/...`
3. Rebuild and redeploy

### Custom Domain Not Working

**Solution**:
1. Check DNS propagation (can take 24-48 hours)
2. Use [https://dnschecker.org](https://dnschecker.org) to verify
3. Ensure DNS records are correctly configured:
   - **A Record**: Points to Netlify's load balancer IP
   - **CNAME**: Points to your Netlify subdomain

## 💰 Netlify Pricing

For this static website:

- **Free Tier**: Sufficient for most needs
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Unlimited sites
  - HTTPS included
  - Global CDN included

- **Pro Tier** ($19/month): Only needed if you exceed free tier limits
  - 400 GB bandwidth/month
  - 25,000 build minutes/month
  - Additional features (password protection, team features)

## 📞 Support

### Netlify Support
- Documentation: [https://docs.netlify.com](https://docs.netlify.com)
- Community Forums: [https://answers.netlify.com](https://answers.netlify.com)
- Status: [https://www.netlifystatus.com](https://www.netlifystatus.com)

### Sai Safety System
- Phone: +91-91635 11805
- For website technical issues or updates

## 🎉 Success!

Your Sai Safety System website is now live on Netlify with:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Lightning-fast performance
- ✅ Automatic deployments
- ✅ Zero server management

Share your live URL with the world! 🚀
