# Publishing Guide

## 🚀 How to Publish @lukisanjaya/ui-library

### Prerequisites

1. **GitHub Account** with repository access
2. **GitHub Personal Access Token** with packages:write permission
3. **npm account** (optional, for npm registry)

### Step 1: Create GitHub Repository

```bash
# Create new repository on GitHub: https://github.com/new
# Repository name: ui-library
# Make it public for easier access
```

### Step 2: Initialize Git and Push

```bash
cd ui-library
git init
git add .
git commit -m "Initial commit: UI Library with 46+ components"
git branch -M main
git remote add origin git@github.com:lukisanjaya/ui-library.git
git push -u origin main
```

### Step 3: Setup GitHub Token

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate new token with `packages:write` permission
3. Copy the token

### Step 4: Configure npm for GitHub Packages

```bash
# Login to GitHub Packages
npm login --scope=@lukisanjaya --registry=https://npm.pkg.github.com

# Or set token directly
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
echo "@lukisanjaya:registry=https://npm.pkg.github.com" >> ~/.npmrc
```

### Step 5: Build and Publish

```bash
# Build the library
bun run build

# Publish to GitHub Packages
npm run publish:github

# Or publish to npm registry
npm run publish:npm
```

### Step 6: Update Dashboard to Use Published Package

Update `dashboard/package.json`:

```json
{
  "dependencies": {
    "@lukisanjaya/ui-library": "^1.0.0"
  }
}
```

Create `dashboard/.npmrc`:

```
@lukisanjaya:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Install in dashboard:

```bash
cd dashboard
bun install @lukisanjaya/ui-library
```

Update imports in dashboard:

```tsx
// Change from relative imports
import { Button } from '../../../ui-library/src'

// To package imports
import { Button } from '@lukisanjaya/ui-library'
```

## 🔄 Version Updates

### Patch Release (1.0.1)
```bash
npm version patch
npm run publish:github
```

### Minor Release (1.1.0)
```bash
npm version minor
npm run publish:github
```

### Major Release (2.0.0)
```bash
npm version major
npm run publish:github
```

## 📦 Package Structure

After publishing, your package will be available at:
- **GitHub Packages**: `https://github.com/lukisanjaya/ui-library/packages`
- **npm Registry**: `https://www.npmjs.com/package/@lukisanjaya/ui-library`

## 🛠 Usage in Projects

### Install
```bash
bun add @lukisanjaya/ui-library
```

### Import
```tsx
import { Button, Card, DataTable } from '@lukisanjaya/ui-library'
```

### CSS (if needed)
```tsx
import '@lukisanjaya/ui-library/dist/style.css'
```

## 🔍 Verification

Check if package is published:

```bash
# Check GitHub Packages
npm view @lukisanjaya/ui-library --registry=https://npm.pkg.github.com

# Check npm registry
npm view @lukisanjaya/ui-library
```

## 🚨 Troubleshooting

### Authentication Issues
```bash
# Re-login to GitHub Packages
npm logout --registry=https://npm.pkg.github.com
npm login --scope=@lukisanjaya --registry=https://npm.pkg.github.com
```

### Build Issues
```bash
# Clean and rebuild
rm -rf dist node_modules
bun install
bun run build
```

### Permission Issues
- Ensure GitHub token has `packages:write` permission
- Repository must be public or token must have repo access
- Package name must match GitHub username/org

## ✅ Success Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] GitHub token configured
- [ ] Package built successfully
- [ ] Package published to GitHub Packages
- [ ] Dashboard updated to use published package
- [ ] All imports working correctly
- [ ] Components render properly in dashboard

## 🎯 Next Steps

1. **Publish the package** following steps above
2. **Update dashboard** to use published package
3. **Test dashboard** with published components
4. **Create master microfrontend** using same pattern
5. **Setup CI/CD** for automatic publishing