import React from "react";
import styles from "./style.module.css";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center gy-4">
        <div className="col-12 col-md-6">
          <h1 className={styles.heading}>Trust With Confidence</h1>
          <h3>Customer First Always</h3>
          <p className="text-muted">1.3+ CRORE investors trust Zerodha.</p>

          <h3>No spam or gimmicks</h3>
          <p className="text-muted">
            No spammy push notifications, only quality tools.
          </p>

          <h3>The Zerodha Universe</h3>
          <p className="text-muted">
            30+ startup ecosystem helping finance users.
          </p>

          <h3>Do better with money</h3>
          <p className="text-muted">
            Tools like Nudge & Kill Switch help you invest smarter.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img
            className={`${styles.img} img-fluid`}
            src="media/ecosystem.png"
            alt="ecoSystem"
          />

          <div className={`${styles.links} mt-3`}>
            <a className="mx-3" href="/">
              Explore Products
            </a>
            <a href="/">Try Kite</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
