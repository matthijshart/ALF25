# ALF25 Static Site

This repository contains the static assets for the Amsterdam Light Festival 2025 website.

## Local development

No build step is required. The site consists of static HTML and images. To preview the site locally you can use any static file server, for example:

```bash
python3 -m http.server 8000
```

The site will be available at <http://localhost:8000>.

### Environment variables

The booking form expects the following variables to be available:

- `BOOKING_API_URL` – API endpoint where form submissions are sent.
- `BOOKING_API_KEY` – secret key for authenticating with the booking API.

When testing locally, set them in your shell before starting the server:

```bash
export BOOKING_API_URL=https://api.example.com/book
export BOOKING_API_KEY=your_api_key
python3 -m http.server 8000
```

On hosting platforms such as Netlify or GitHub Pages, configure these values in the platform's environment/secret settings.

## Deployment

### GitHub Pages

1. Push changes to the `main` branch.
2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the site to GitHub Pages automatically.
3. Enable Pages in the repository settings if it has not been enabled.

### Netlify

1. Connect the repository to Netlify.
2. Set `BOOKING_API_URL` and `BOOKING_API_KEY` in **Site settings → Build & deploy → Environment**.
3. Deploy using the Netlify UI or via the CLI:

```bash
netlify deploy --prod
```

No build command is required; the publish directory is the repository root.

