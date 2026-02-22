# pelquant

Coming Soon page for pelquant - Fullstack Development and SecOps

## Description
A modern, dark-themed coming soon page with a tech-focused design.

## Deployment to Cloudflare Workers

### Prerequisites
- Cloudflare account
- Wrangler CLI: `npm install -g wrangler`

### Local Development
```bash
npm install
npm start
```

### Build
```bash
npm run build
```

### Deploy to Cloudflare Workers

1. Login to Cloudflare:
```bash
wrangler login
```

2. Deploy:
```bash
wrangler deploy
```

### CI/CD with GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment.

**Setup:**
1. Get your Cloudflare API Token from: https://dash.cloudflare.com/profile/api-tokens
2. Add it as a GitHub secret named `CLOUDFLARE_API_TOKEN`
3. Push to `main` branch to trigger deployment

### Manual Deployment
```bash
wrangler deploy
```
