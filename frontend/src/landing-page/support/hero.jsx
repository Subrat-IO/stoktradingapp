import React from "react";
import styles from "./style.module.css";

function Hero() {
  return (
    <div className={`bg-primary ${styles.Herocontainer}`}>
      <div className={`${styles.heroheading}`}>
        <div>
          <h3>Support Portal</h3>
        </div>

        <div>
          <p>
            <a className={styles.tracktickets} href="/">
              Track tickets
            </a>
          </p>

          <div className={styles.featured}>
            <h3>Featured</h3>
            <ol className={`${styles.listings}`}>
              <li>
                <a href="/">Current takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="/">Latest Listings</a>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className={styles.answer}>
        <h2>
          Search for an answer or browse help topics <br />
          to create ticket
        </h2>

        <input
          type="text"
          className={styles.inputarea}
          placeholder="Search here your ticket"
        />

        <ul className={`${styles.bottomLinks}`}>
          <li><a href="/">Track account opening</a></li>
          <li><a href="/">Track segment activation</a></li>
          <li><a href="/">Intraday</a></li>
          <li><a href="/">Margins</a></li>
          <li><a href="/">Kite user manual</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
