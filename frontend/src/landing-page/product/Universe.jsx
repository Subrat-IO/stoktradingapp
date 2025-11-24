import React from "react";
import styles from "./style.module.css";

function Universe() {
  return (
    <section className={`container ${styles.universeSection}`}>
      <div className="text-center mt-4">
        <h5 className={styles.sub}>
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

      <h2 className={`text-center fw-semibold mt-5 ${styles.header}`}>
        The Zerodha Universe
      </h2>
      <p className={`text-center text-muted mb-5 ${styles.sub2}`}>
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>

      <div className="row text-center justify-content-center">
        {[
          {
            logo: "zerodhaFundhouse.png",
            link: "https://zerodhafundhouse.com",
            text: "Creating simple & transparent index funds for saving goals.",
          },
          {
            logo: "sensibullLogo.svg",
            link: "https://sensibull.com",
            text: "Options platform for strategies, positions & data analysis.",
          },
          {
            logo: "tijori.svg",
            link: "https://tijori.finance.com",
            text: "Deep stock insights: sectors, supply chains & fundamentals.",
          },
        ].map((i, k) => (
          <div key={k} className="col-12 col-md-4 mb-5">
            <a href={i.link} target="_blank">
              <img
                src={`/media/${i.logo}`}
                alt=""
                className={styles.partnerLogo}
              />
            </a>
            <p className={`text-muted mt-3 ${styles.paragraph}`}>{i.text}</p>
          </div>
        ))}
      </div>

      <div className="row text-center justify-content-center">
        {[
          {
            logo: "streakLogo.png",
            link: "https://www.streak.tech",
            text: "Create and backtest strategies without coding.",
          },
          {
            logo: "smallcaseLogo.png",
            link: "https://www.smallcase.com",
            text: "Invest in diversified theme-based stock baskets.",
          },
          {
            logo: "dittoLogo.png",
            link: "https://joinditto.in",
            text: "Personal insurance advisory without spam or mis-selling.",
          },
        ].map((i, k) => (
          <div key={k} className="col-12 col-md-4 mb-5">
            <a href={i.link} target="_blank">
              <img
                src={`/media/${i.logo}`}
                alt=""
                className={styles.partnerLogo}
              />
            </a>
            <p className={`text-muted mt-3 ${styles.paragraph}`}>{i.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/" className="btn btn-primary px-5 py-3">
          Sign Up for Free
        </a>
      </div>
    </section>
  );
}

export default Universe;
