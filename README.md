# Hyperliquid Basic Proxy (CORS Fixed)

A minimal Vercel serverless proxy that supports:

- POST { type: "meta" }
- POST { type: "fundingHistory", coin: "BTC" }

### Deploy Instructions

1. Upload this folder to a new GitHub repo.
2. Go to https://vercel.com → New Project.
3. Import the repo.
4. Deploy.
5. Your working proxy endpoint will be:

   https://YOUR-PROJECT.vercel.app/api/funding

Use that endpoint in your HTML or Streamlit app.
