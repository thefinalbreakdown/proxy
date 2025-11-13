export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const response = await fetch("https://api.hyperliquid.xyz/info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);
    } catch (e) {
      return res.status(500).json({
        error: "Invalid JSON from Hyperliquid",
        raw: text,
      });
    }
  } catch (e) {
    return res.status(500).json({
      error: "Proxy error",
      details: e.toString(),
    });
  }
}
