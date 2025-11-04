# GitHub Pages Deployment Instructions

This guide will help you deploy your Astro CV site to GitHub Pages.

## Prerequisites

- Your code must be in a GitHub repository
- You need to enable GitHub Pages in your repository settings

## Step-by-Step Instructions

### 1. Update the Astro Configuration

The `astro.config.github.mjs` file has been created with the following important changes:

- **`site`**: Set to `https://seanvizm.github.io` (your GitHub Pages URL)
- **`base`**: Set to `/astro-mycv` (your repository name)
- **`output`**: Changed to `static` (required for GitHub Pages)
- **Removed**: Vercel adapter (not needed for static sites)

> ⚠️ **Important**: Update the `site` and `base` values in `astro.config.github.mjs` if:
> - Your GitHub username is different from `seanvizm`
> - Your repository name is different from `astro-mycv`

### 2. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/seanvizm/astro-mycv`
2. Click on **Settings** (top menu)
3. Scroll down and click on **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 3. Push Your Code

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically run when you push to the `main` branch.

```bash
# Add all files
git add .

# Commit the changes
git commit -m "Add GitHub Pages deployment workflow"

# Push to GitHub
git push origin main
```

### 4. Monitor the Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Wait for both the "build" and "deploy" jobs to complete (green checkmarks)

### 5. Access Your Site

Once deployed, your site will be available at:
```
https://seanvizm.github.io/astro-mycv/
```

> 🎉 **Note**: The first deployment might take a few minutes. Subsequent deployments are usually faster.

## Workflow Details

The GitHub Actions workflow does the following:

1. **Triggers**: Runs on every push to `main` branch or manually via Actions tab
2. **Build Job**:
   - Checks out your code
   - Sets up Node.js 22
   - Installs pnpm
   - Installs dependencies
   - Builds your site using the GitHub Pages config
   - Uploads the built files
3. **Deploy Job**:
   - Deploys the built files to GitHub Pages

## Local Testing

To test the GitHub Pages build locally:

```bash
# Build using the GitHub Pages configuration
pnpm run build:github

# Preview the built site
pnpm run preview
```

> **Note**: When previewing locally, some assets might not load correctly due to the `/astro-mycv` base path. This is normal and will work correctly when deployed to GitHub Pages.

## Troubleshooting

### Build Fails

- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Make sure `pnpm-lock.yaml` is committed

### Site Not Loading

- Verify the `site` and `base` values in `astro.config.github.mjs` match your GitHub username and repository name
- Check that GitHub Pages is enabled and set to "GitHub Actions" source
- Clear your browser cache and try again

### Assets Not Loading

- Ensure you're using relative paths or the `base` path for assets
- Images should be in the `public/` folder or imported in components

## Keeping Both Vercel and GitHub Pages Deployments

You can maintain both deployment options:

- **Vercel**: Use `pnpm run build` (uses `astro.config.mjs` with SSR)
- **GitHub Pages**: Use `pnpm run build:github` (uses `astro.config.github.mjs` with static output)

## Manual Deployment

You can also trigger a deployment manually:

1. Go to the **Actions** tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

---

**Need Help?** Check the [Astro documentation](https://docs.astro.build/en/guides/deploy/github/) for more information about GitHub Pages deployment.
