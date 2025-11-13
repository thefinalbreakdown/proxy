# Hyperliquid Basic Proxy (Vercel)

This is a minimal serverless proxy for the Hyperliquid API.

## Endpoints supported
- POST /api/funding
  - { "type": "meta" }
  - { "type": "fundingHistory", "coin": "BTC" }

## How to deploy
1. Upload this folder to a new GitHub repository.
2. Go to https://vercel.com → New Project.
3. Import your GitHub repo.
4. Click Deploy.
5. Your proxy URL will be:

   https://YOUR-PROJECT-NAME.vercel.app/api/funding

Use that URL inside your HTML or Streamlit app.
