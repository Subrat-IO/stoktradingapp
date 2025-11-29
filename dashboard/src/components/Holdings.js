import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allPosition, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allpositions").then((res) => {
      setAllPositions(res.data || []);
    });
  }, []);

  const labels = allPosition.map((item) => item.name || "-");

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allPosition.map((stock) => Number(stock.price ?? 0)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allPosition.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPosition.map((stock, index) => {
              const avg = Number(stock.avg ?? 0);
              const price = Number(stock.price ?? 0);
              const qty = Number(stock.qty ?? 0);

              const curValue = price * qty;
              const pnl = curValue - avg * qty;

              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";

              // Determine daily change positivity
              const dayValue = Number(stock.day ?? 0);
              const dayClass = dayValue >= 0 ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.name || "-"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net ?? "-"}</td>
                  <td className={dayClass}>{stock.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Static Summary Values — can be made dynamic later */}
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
