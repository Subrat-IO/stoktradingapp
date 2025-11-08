  import React from "react";
  import styles from "./style.module.css";

  function Footer() {
    return (
      <footer className={`${styles.footer} container mt-5`}>
        <div className={`row ${styles.ImgContainer}`}>
          <div className="col-3">
            <img className={styles.imglogo} src="/media/logo.svg" alt="logo" />
            <p className="mt-3">
              ©2010-2024 Not Zerodha Broking Ltd. <br /> All Rights Reserved.
            </p>
          </div>

          <div className="col-3">
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
                <a>Zerodha.tech</a>
              </li>
              <li>
                <a>Press & Media</a>
              </li>
              <li>
                <a>Zerodha Cares (CSR)</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
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
                <a>Downloads & Resources</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
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
          <p className={` mt-5 ${styles.styletext}`}>
            <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
              INZ000031633 CDSL: Depository services through Zerodha Securities
              Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
              through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
              no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
              #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
              J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as prescribed
              by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." <br /> Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in case
              of allotment. In case of non allotment the funds will remain in your
              bank account. As a business we don't give stock tips, and have not
              authorized anyone to trade on behalf of others. If you find anyone
              claiming to be part of Zerodha and offering such services, please
              create a ticket here.
            </p>
          </div>
      
          </p>
          <p className={`${styles.Declaration}`}>This is developed by Subrat Sethi All rights reserved 💚 </p>
        </div>
      </footer>
    );
  }

  export default Footer;
