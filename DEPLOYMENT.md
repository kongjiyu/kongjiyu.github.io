# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Repository pushed to GitHub

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Kong Ji Yu Portfolio"
git branch -M master
git remote add origin https://github.com/kongjiyu/Portfolio.git
git push -u origin master
```

### 2. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This command will:
- Build your React app for production
- Create a `gh-pages` branch
- Push the build folder to GitHub Pages

### 3. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/kongjiyu/Portfolio`
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

### 4. Access Your Site

Your portfolio will be available at:
```
https://kongjiyu.github.io/Portfolio/
```

**Note:** It may take a few minutes for the site to go live after the first deployment.

## Updating Your Portfolio

Whenever you make changes and want to update the live site:

```bash
git add .
git commit -m "Update portfolio"
git push origin master
npm run deploy
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain from a registrar (e.g., Namecheap, GoDaddy)
2. In your repository, go to Settings > Pages
3. Add your custom domain
4. Configure DNS settings with your domain registrar

## Troubleshooting

### Site Not Loading
- Make sure the `homepage` field in `package.json` matches your GitHub Pages URL
- Check if gh-pages branch exists in your repository
- Verify GitHub Pages is enabled in repository settings

### 404 Errors on Refresh
- GitHub Pages doesn't support client-side routing by default
- Consider using HashRouter instead of BrowserRouter, or
- Add a custom 404.html page

### Build Errors
- Run `npm run build` locally to test
- Check the console for any errors
- Ensure all dependencies are installed

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)

---

Good luck with your deployment! 🚀
