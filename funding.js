export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const response = await fetch("https://api.hyperliquid.xyz/info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();
    try {
      return res.status(200).json(JSON.parse(text));
    } catch {
      return res.status(500).json({ error: "Invalid JSON from Hyperliquid", raw: text });
    }
  } catch (e) {
    return res.status(500).json({ error: "Proxy error", details: e.toString() });
  }
}
