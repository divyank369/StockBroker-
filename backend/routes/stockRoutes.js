// backend/routes/stockRoutes.js

const express = require("express");
const yahooFinance = require("yahoo-finance2").default;

const router = express.Router();

router.get("/price/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol + ".NS";

    const quote = await yahooFinance.quote(symbol);

    res.json({
      symbol,
      price: quote.regularMarketPrice,
      change: quote.regularMarketChange,
      percent: quote.regularMarketChangePercent,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;