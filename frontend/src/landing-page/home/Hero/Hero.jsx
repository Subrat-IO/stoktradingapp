import React from "react";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={`container ${styles.heroWrap}`}>
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="media/homeHero.png"
            alt="Hero Image"
            className={`img-fluid mb-4 ${styles.heroImg}`}
          />

          <h1 className={styles.heading}>Invest In Everything</h1>
          <p className={styles.subtext}>
            Online platform to invest and grow your financial stability and
            independent lifestyle
          </p>

          <button className={`btn btn-primary ${styles.heroBtn}`}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}
