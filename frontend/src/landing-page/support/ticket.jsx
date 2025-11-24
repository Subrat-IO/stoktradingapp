import React from "react";
import styles from "./style.module.css";

function Ticket() {
  return (
    <div className={`${styles.ticketContainer} container`}>
      <h1 className="text-center mb-5 fw-semibold p-3">
        To create a ticket, select a relevant topic
      </h1>

      <div className="row gy-4">
        {/* ===== Column 1 ===== */}
        <div className="col-12 col-md-4">
          <h4>
            <i className="bx bxs-plus-circle"></i> Account Opening
          </h4>

          <ul className={styles.listitems}>
            <li>
              <a href="/">Online Account Opening</a>
            </li>
            <li>
              <a href="/">Offline Account Opening</a>
            </li>
            <li>
              <a href="/">Company partnership & HUF account</a>
            </li>
            <li>
              <a href="/">NRI Account Opening</a>
            </li>
            <li>
              <a href="/">Charges at Zerodha</a>
            </li>
            <li>
              <a href="/">Getting Started</a>
            </li>
          </ul>
        </div>

        {/* ===== Column 2 ===== */}
        <div className="col-12 col-md-4">
          <h4>
            <i className="bx bxs-user"></i> Your Zerodha Account
          </h4>

          <ul className={styles.listitems}>
            <li>
              <a href="/">Login Credentials</a>
            </li>
            <li>
              <a href="/">Account Modification</a>
            </li>
            <li>
              <a href="/">DP ID & bank details</a>
            </li>
            <li>
              <a href="/">Your Profile</a>
            </li>
            <li>
              <a href="/">Transfer of shares</a>
            </li>
          </ul>
        </div>

        {/* ===== Column 3 ===== */}
        <div className="col-12 col-md-4">
          <h4>
            <i className="bx bx-table"></i> Trading & Products
          </h4>

          <ul className={styles.listitems}>
            <li>
              <a href="/">Margins & Order Types</a>
            </li>
            <li>
              <a href="/">Kite Web & Mobile</a>
            </li>
            <li>
              <a href="/">Trading FAQ</a>
            </li>
            <li>
              <a href="/">Corporate Actions</a>
            </li>
            <li>
              <a href="/">Sentinel</a>
            </li>
            <li>
              <a href="/">Kite API</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
