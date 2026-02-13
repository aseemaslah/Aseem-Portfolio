# Vercel NOT_FOUND Error - Complete Troubleshooting Guide

## ✅ Already Fixed
- ✅ `vercel.json` with SPA rewrites is configured
- ✅ All component imports are valid
- ✅ Local development works fine

## 🔍 Diagnostic Steps

### Step 1: Verify Vercel Build Settings

Go to your Vercel project dashboard and check:

**Build & Development Settings:**
- **Framework Preset**: Should be "Vite" (auto-detected)
- **Build Command**: `npm run build` or `vite build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 2: Check Deployment Logs

1. Go to your Vercel dashboard
2. Click on your latest deployment
3. Check the "Building" tab for errors
4. Look for:
   - ❌ Build failures
   - ❌ Missing dependencies
   - ❌ TypeScript/ESLint errors
   - ❌ Asset loading errors

### Step 3: Common Issues & Fixes

#### Issue A: 404 on Page Refresh
**Symptom**: Homepage works, but refreshing on `/about` gives 404

**Fix**: Already applied! The `vercel.json` should fix this.

**Verify**: 
```bash
cat vercel.json
```

Should show:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Issue B: Assets Not Found (CSS/JS 404)
**Symptom**: Page loads but no styles, console shows 404 for assets

**Possible Causes**:
1. **Base path issue** - If deploying to a subdirectory
2. **Build output incorrect** - dist folder structure wrong

**Fix for subdirectory deployment**:
Edit `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/your-repo-name/' if deploying to GitHub Pages
})
```

#### Issue C: Environment Variables
**Symptom**: App works locally but breaks on Vercel

**Fix**:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any required variables (API keys, etc.)
3. Redeploy

#### Issue D: Build Fails on Vercel
**Symptom**: Deployment fails during build

**Common Causes**:
- Missing dependencies in `package.json`
- ESLint errors (strict mode on Vercel)
- TypeScript errors
- Memory issues

**Fix**:
1. Run `npm run build` locally to catch errors
2. Fix any linting/type errors
3. If memory issue, add to `package.json`:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
  }
}
```

### Step 4: Test Your Build Locally

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` and test:
- ✅ Homepage loads
- ✅ Navigate to different sections
- ✅ Refresh on each section
- ✅ All styles load
- ✅ All images load

### Step 5: Force Redeploy on Vercel

Sometimes Vercel caches old configurations:

**Option A: Via Dashboard**
1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"

**Option B: Via Git**
```bash
git commit --allow-empty -m "Force Vercel redeploy"
git push
```

### Step 6: Check for Specific 404 Errors

#### If 404 on specific files:
Check if the file exists in your `dist` folder after build:
```bash
ls -R dist
```

Common missing files:
- `vite.svg` → Should be in `public/` folder
- Font files → Check font imports
- Images → Ensure they're in `public/` or imported correctly

## 🎯 Quick Checklist

- [ ] `vercel.json` exists with rewrite rules
- [ ] Build command is `npm run build` or `vite build`
- [ ] Output directory is `dist`
- [ ] Local build works (`npm run build && npm run preview`)
- [ ] No ESLint/TypeScript errors
- [ ] All assets are in `public/` folder or properly imported
- [ ] Environment variables are set (if needed)
- [ ] Latest code is pushed to Git
- [ ] Vercel is connected to correct branch

## 🆘 Still Not Working?

### Get Detailed Error Info

1. **Check Browser Console** (F12) on deployed site
   - Look for specific 404 URLs
   - Check Network tab for failed requests

2. **Check Vercel Function Logs**
   - Dashboard → Your Project → Logs
   - Look for runtime errors

3. **Compare Local vs Production**
   - Does it work locally with `npm run preview`?
   - If yes → Deployment config issue
   - If no → Code issue

### Contact Information

If you're still stuck, provide:
1. Vercel deployment URL
2. Screenshot of error
3. Browser console errors
4. Vercel build logs

## 📚 Additional Resources

- [Vercel Vite Deployment Guide](https://vercel.com/docs/frameworks/vite)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [SPA Routing on Vercel](https://vercel.com/guides/deploying-react-with-vercel)
