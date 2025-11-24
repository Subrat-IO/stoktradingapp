import React from "react";
import styles from "./style.module.css";

function Pricing() {
  return (
    <div className={`container p-4 ${styles.container}`}>
      <div className="row gy-4">
        <div className="col-12 col-md-5">
          <h1 className="mb-3">Unbeatable Pricing</h1>
          <p>
            Transparent fees, no hidden charges. India's most affordable
            stockbroking.
          </p>
          <a className={styles.pricing} href="/">
            See Pricing <i className="bx bx-arrow-back bx-rotate-180"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 offset-md-1">
          <div className="row text-center">
            <div className="col-6 p-3">
              <h1 className={styles.price}>₹0</h1>
              <p>Free equity delivery & direct mutual funds</p>
            </div>
            <div className="col-6 p-3">
              <h1 className={styles.price}>₹20</h1>
              <p>Flat fee for intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
