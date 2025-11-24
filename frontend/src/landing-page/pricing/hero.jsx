import React from "react";
import styles from "./style.module.css";

function PricingHero() {
  return (
    <>
      {/* ===== HERO TEXT ===== */}
      <div className="text-center p-5 mt-4">
        <h2 className={`fw-semibold ${styles.heading}`}>Pricing</h2>
        <h5 className={`opacity-75 mt-3 ${styles.sub}`}>
          List of all charges and taxes
        </h5>
      </div>

      {/* ===== CARDS SECTION ===== */}
      <div
        className={`container text-center d-flex flex-wrap justify-content-center gap-4 p-4 ${styles.cardsWrapper}`}
      >
        <div className={`${styles.cardBox}`}>
          <img src="/media/pricingMF.svg" alt="Free Equity" />
          <h3>Free Equity Delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className={`${styles.cardBox}`}>
          <img src="/media/intradayTrades.svg" alt="Intraday" />
          <h3>Intraday & F&O</h3>
          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order across
            equity, currency, and commodity trades.
          </p>
        </div>

        <div className={`${styles.cardBox}`}>
          <img src="/media/pricingMF.svg" alt="Mutual Fund" />
          <h3>Free Direct Mutual Funds</h3>
          <p>
            All direct mutual funds are absolutely free — no commissions & DP
            charges.
          </p>
        </div>
      </div>
    </>
  );
}

export default PricingHero;
