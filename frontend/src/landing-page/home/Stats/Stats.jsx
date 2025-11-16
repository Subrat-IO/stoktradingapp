import React from "react";
import styles from "./style.module.css";

function Stats() {
  return (
    <div className="container mb-5">
      <div className={` row ${styles.row} `}>
        <div className={`col-6 ${styles.rightsection}`}>
          <h1>Trust With Confidence</h1>
          <h3>Customer First Always</h3>
          <p className="text-muted">
            That's why 1.3crore+ customers trust Zerodha with <br />
            3.5+lakh crores worth of equity investments
          </p>
          <h3>No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks "spam" gimmification or annoying push notifications.
            <br />
            High quality apps that you use at your pace, the way you like
          </p>
          <h3>The Zerodha Universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. our investments in 30+
            <br />
            fintech startups offer you talored services specific to your needs
          </p>
          <h3>Do better with money</h3>
          <p className="text-muted">
            With initatives like nudge and kill switch , we don't just
            <br />
            facilitate transactions, but actively help you do better with your
            money
          </p>
        </div>
        <div className="col-6">
          <img
            className={`${styles.img}`}
            src="media/ecosystem.png"
            alt="ecoSystem"
          />
          <div className={`${styles.links}`}>
            <a className="mx-5" href="/">
              ExploreOurProducts<i class="bx bx-arrow-back bx-rotate-180"></i>{" "}
            </a>
            <a href="">TryKite</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
