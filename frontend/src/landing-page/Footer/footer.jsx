import React from "react";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} pt-5 mt-5`}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <img className={styles.imglogo} src="/media/logo.svg" alt="logo" />
            <p className="mt-3 text-muted">
              ©2010-2024 Not Zerodha Broking Ltd. <br /> All Rights Reserved.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <ul className={styles.listitems}>
              <li>
                <a>Company</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Referral Program</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Press & Media</a>
              </li>
              <li>
                <a>CSR</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <ul className={styles.listitems}>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Support Portal</a>
              </li>
              <li>
                <a>Z-Connect Blog</a>
              </li>
              <li>
                <a>List of Charges</a>
              </li>
              <li>
                <a>Downloads</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <ul className={styles.listitems}>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Disclosure</a>
              </li>
              <li>
                <a>Investor Charter</a>
              </li>
              <li>
                <a>Regulatory Docs</a>
              </li>
              <li>
                <a>Contact Support</a>
              </li>
            </ul>
          </div>
        </div>

        <p className={`${styles.longtext} text-muted mt-4`}>
          Investments in securities market are subject to market risks; read all
          documents carefully before investing.
        </p>

        <p className={`${styles.Declaration}`}>Developed by Subrat Sethi 💚</p>
      </div>
    </footer>
  );
}

export default Footer;
