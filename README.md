# shrish-io

Personal website for `shrish.io`, hosted on GitHub Pages.

## Local development

Open `index.html` in a browser or run a simple static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying on GitHub Pages

- Push to `main`. GitHub Pages will serve content from the repository root.
- Ensure `CNAME` contains `shrish.io`.
- The `.nojekyll` file disables Jekyll so all files are served as-is.

### Enable Pages

1. In GitHub: Settings → Pages
2. Build and deployment → Source: Deploy from a branch
3. Branch: `main` (root) → Save
4. Custom domain: `shrish.io` → Save → Enforce HTTPS

### DNS for custom domain

Create DNS records at your domain provider:

- A records pointing to GitHub Pages:
  - `@` → `185.199.108.153`
  - `@` → `185.199.109.153`
  - `@` → `185.199.110.153`
  - `@` → `185.199.111.153`
- Optional: CNAME for `www` → `shrish-io.github.io` (or `your-username.github.io` if using a user/organization site)

Propagation may take a while. After DNS resolves, GitHub will issue an SSL cert when “Enforce HTTPS” is enabled.

## Structure

- `index.html`: Home page
- `404.html`: Not found page
- `styles.css`: Styles
- `CNAME`: Custom domain
- `.nojekyll`: Disable Jekyll
- `robots.txt`: Crawling rules
- `sitemap.xml`: Sitemap for search engines
- `favicon.svg`: Site icon

## Personalization checklist

- Update contact links in `index.html`
- Replace placeholder project cards
- Tweak colors/typography in `styles.css`

