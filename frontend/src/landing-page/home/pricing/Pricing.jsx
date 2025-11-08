import React from "react";
import styles from "./style.module.css";

function Pricing() {
  return (
    <div className={`container p-5 mt-5${styles.container}`}>
      <div className="row p-5">
        <div className={`col-5 ${styles.pricingpanel}`}>
          <h1 className="mb-4">Unbeatable Pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and
             price transparency in india. Flat fees and no hidden
            charges.
          </p>
          <a className={`${styles.pricing}`} href="/">
            See Pricing <i class="bx bx-arrow-back bx-rotate-180"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className={`row ${styles.table}`}>
            <div className={`col-6 ${styles.divpanel}`}>
              <h1 className={`text-center fs-1 mb-5 ${styles.fontsizeh1}`}>&#8377; 0</h1>
              <p className="text-center">Free equity deliver and <br /> direct mutual funds</p>
            </div>
            <div className={`col-6  text-center ${styles.divpanel}`}>
              <h1 className="mb-5">&#8377; 20</h1>
              <p>Intraday and F&O</p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
