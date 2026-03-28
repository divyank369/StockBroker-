import React, { useState, useEffect, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutGraph } from "./DoughnutGraph";

const WatchList = () => {
  const [stocks, setStocks] = useState(watchlist);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updated = await Promise.all(
          watchlist.map(async (stock) => {
            const symbol = stock.name.toUpperCase();

            const res = await fetch(`/api/stocks/price/${symbol}`);
            const data = await res.json();

            return {
              ...stock,
              price: data.price ?? stock.price,
              percent:
                data.percent !== undefined
                  ? data.percent.toFixed(2) + "%"
                  : stock.percent,
              isDown: data.change < 0,
            };
          })
        );

        setStocks(updated);
        setLoading(false);
      } catch (err) {
        console.error("API error:", err);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); // refresh every 5 sec

    return () => clearInterval(interval);
  }, []);

  // Dynamic chart data
  const labels = stocks.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Prices",
        data: stocks.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: Nifty, bse, gold mcx"
          className="search"
        />
        <span className="counts">{stocks.length} / 50</span>
      </div>

      {loading ? (
        <p style={{ padding: "10px" }}>Loading market data...</p>
      ) : (
        <ul className="list">
          {stocks.map((stock, index) => (
            <WatchListItem stock={stock} key={index} />
          ))}
        </ul>
      )}

      <DoughnutGraph data={data} />
    </div>
  );
};

export default WatchList;

// ================= ITEM =================

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        {showActions && <WatchListActions uid={stock.name} />}

        <div className="item-info">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">₹{stock.price}</span>
        </div>
      </div>
    </li>
  );
};

// ================= ACTIONS =================

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        {/* BUY */}
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>

        {/* SELL */}
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        {/* ANALYTICS */}
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
          <button>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        {/* MORE */}
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};