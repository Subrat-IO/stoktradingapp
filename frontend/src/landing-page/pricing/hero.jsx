import React from "react";
import styles from "./style.module.css"

function Hero() {
  return (
    <>
      <div className="text-center p-5 mb-5">
        <h2>Pricing</h2>
        <h5 className="opacity-50 mt-3">List of all charges and taxes</h5>
      </div>
      <div
        className={`container text-center mt-5 p-5 d-flex ${styles.container}`}
      >
        <div className={`${styles.imgtag} col-4`}>
          <img src="/media/pricingMF.svg" alt="" />
          <h2 className="mb-3">Free Equity Delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className={`${styles.imgtag} col-4`}>
          <img src="/media/intradayTrades.svg" alt="" />
          <h2 className="mb-3">Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className={`${styles.imgtag} col-4`}>
          <img src="/media/pricingMF.svg" alt="" />
          <h2 className="mb-3">Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
