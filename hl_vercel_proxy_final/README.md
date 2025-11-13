# Hyperliquid Basic Proxy (Final, CORS-Enabled)

This repo is ready to be deployed directly to Vercel.

## Files

- `api/funding.js` – Vercel serverless function that forwards requests to `https://api.hyperliquid.xyz/info` and adds CORS headers.

## Expected repo structure (VERY IMPORTANT)

The *root* of your GitHub repo should look like:

├── api
│   └── funding.js
└── README.md

There should NOT be an extra folder level like `hl_vercel_proxy_final/api/funding.js`.
When you create the GitHub repo, upload the contents of this zip so that `api` is at the top level.

## Deploy steps

1. Create a new GitHub repo.
2. Upload the *contents* of this zip so that `api/funding.js` is at the root.
3. Go to https://vercel.com → New Project.
4. Import the GitHub repo.
5. Deploy.

Your proxy endpoint will then be:

    https://YOUR-PROJECT-NAME.vercel.app/api/funding

You can test it by visiting that URL in a browser (you should see a JSON error like
`{ "error": "Only POST allowed" }`).

You can then point your HTML/Streamlit app to that endpoint.
