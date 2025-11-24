import React from "react";
import styles from "./style.module.css";

function Awards() {
  return (
    <div className={`container ${styles.awardsContainer}`}>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img
            className={`${styles.LargestBrokerImg} img-fluid`}
            src="/media/largestBroker.svg"
            alt="LargestBroker"
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className={styles.Large}>Largest Stock Broker in India</h1>
          <p className={styles.desc}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily.
          </p>

          <div className={`d-flex justify-content-between ${styles.listitems}`}>
            <ul>
              <li>Futures & Options</li>
              <li>Commodity Derivatives</li>
              <li>Currency Derivatives</li>
            </ul>
            <ul>
              <li>Stocks & IPO</li>
              <li>Direct Mutual Funds</li>
              <li>Bonds & Gold</li>
            </ul>
          </div>

          <img
            className={`${styles.presslogo} img-fluid mt-3`}
            src="/media/pressLogos.png"
            alt="press logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
