import React from "react";
import styles from "./style.module.css";

function Universe() {
  return (
    <section className={`${styles.universeSection} container`}>
      {/* Blog Info */}
      <div className="text-center mt-5">
        <h5 className="mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </h5>
      </div>

      {/* Title */}
      <h2 className="text-center mt-5 pt-5  mb-3 fw-semibold">The Zerodha Universe</h2>
      <p className="text-center text-muted mb-5">
        Extend your trading and investment experience even further with our partner platforms.
      </p>

      {/* Row 1 */}
      <div className={`row text-center justify-content-center ${styles.universeRow}`}>
        <div className="col-12 col-md-4 mb-5">
          <a href="https://zerodhafundhouse.com" target="_blank" rel="noopener noreferrer">
            <img src="/media/zerodhaFundhouse.png" alt="Zerodha Fund House" className={styles.partnerLogo} />
          </a>
          <p className={`text-muted mt-3 ${styles.paragraph}`}>
            Our asset management venture that is creating <br /> simple and transparent index funds
            to <br /> help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <a href="https://sensibull.com" target="_blank" rel="noopener noreferrer">
            <img src="/media/sensibullLogo.svg" alt="Sensibull" className={styles.partnerLogo} />
          </a>
          <p className={`text-muted mt-3 ${styles.paragraph}`}>
            Options trading platform that lets you create  <br />strategies, analyze positions,
            and examine data points  <br />like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <a href="https://tijorifinance.com" target="_blank" rel="noopener noreferrer">
            <img src="/media/tijori.svg" alt="Tijori" className={styles.partnerLogo} />
          </a>
          <p className={`text-muted mt-3 ${styles.paragraph}`}>
            Investment research platform that offers <br /> detailed insights on stocks, sectors,
           <br /> supply chains, and more.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className={`row text-center justify-content-center ${styles.universeRow}`}>
        <div className="col-12 col-md-4 mb-5">
          <a href="https://www.streak.tech" target="_blank" rel="noopener noreferrer">
            <img src="/media/streakLogo.png" alt="Streak" className={styles.partnerLogo} />
          </a>
          <p className={`text-muted mt-3 ${styles.paragraph}`}>
            Systematic trading platform that <br /> allows you to create and backtest strategies <br />
            without coding.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <a href="https://www.smallcase.com" target="_blank" rel="noopener noreferrer">
            <img src="/media/smallcaseLogo.png" alt="Smallcase" className={styles.partnerLogo} />
          </a>
          <p className={`text-muted mt-3 ${styles.paragraph}`}>
            Thematic investing platform that helps <br /> you invest in diversified baskets <br />0 of stocks or ETFs.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <a href="https://joinditto.in" target="_blank" rel="noopener noreferrer">
            <img src="/media/dittoLogo.png" alt="Ditto" className={styles.partnerLogo} />
          </a>
          <p className={`text-muted mt-3 ${styles.paragraph}`}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
        <div>
         <button className="mb-3 mt-5 px-5 py-3 btn btn-primary text-center" ><a href="" className="text-decoration-none" style={{color:"white"}}>Sign Up for Free</a></button>

        </div>
      </div>
     
    </section>
  );
}

export default Universe;
