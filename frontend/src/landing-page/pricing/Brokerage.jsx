import React from "react";
import styles from "./style.module.css";

function Brokerage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      {/* ===== HEADER ===== */}
      <div className="row text-center">
        <div className="col-12">
          <h1 className="text-primary fw-semibold">Brokerage Calculator</h1>
        </div>
      </div>

      {/* ===== CONTENT ROW ===== */}
      <div className="row mt-4 gy-5">
        {/* ==== LEFT TEXT SECTION ==== */}
        <div className="col-12 col-md-7">
          <ul className={`${styles.list}`}>
            <li>
              Call & Trade / RMS auto square-off: additional charges ₹50 + GST
              per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copies of contract notes, if required, will be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 instead of ₹20.
            </li>
          </ul>
        </div>

        {/* ==== RIGHT CHARGES TITLE ==== */}
        <div className="col-12 col-md-5 text-center">
          <h2 className="text-primary fw-semibold">List of Charges</h2>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
