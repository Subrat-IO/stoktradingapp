import React from "react";
import styles from "./style.module.css";

function SupportHero() {
  return (
    <div className={`${styles.Herocontainer}`}>
      {/* ======= Header Section ======= */}
      <div className={styles.heroheading}>
        <div>
          <h3>Support Portal</h3>
        </div>

        <div className={styles.rightLinks}>
          <p>
            <a className={styles.tracktickets} href="/">
              Track tickets
            </a>
          </p>

          <div className={styles.featured}>
            <h3>Featured</h3>
            <ol className={styles.listings}>
              <li>
                <a href="/">Current takeovers and delisting - January 2024</a>
              </li>
              <li>
                <a href="/">Latest listings</a>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* ======= Search Section ======= */}
      <div className={styles.answer}>
        <h2>
          Search for an answer or browse help topics <br /> to create a ticket
        </h2>

        <input
          type="text"
          className={styles.inputarea}
          placeholder="Search your query..."
        />

        <ul className={styles.bottomLinks}>
          <li>
            <a href="/">Track account opening</a>
          </li>
          <li>
            <a href="/">Track segment activation</a>
          </li>
          <li>
            <a href="/">Intraday</a>
          </li>
          <li>
            <a href="/">Margins</a>
          </li>
          <li>
            <a href="/">Kite user manual</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SupportHero;
