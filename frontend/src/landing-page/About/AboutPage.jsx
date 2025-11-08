import React from "react";
import styles from "./style.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.hero}>
        <h4>
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h4>
      </div>

      <div className={styles.twocol}>
        <div className={styles.col}>
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company Zerodha,
          a combination of Zero and "Rodha", the Sanskrit word for barrier.
          <br />
          <br />
          Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India.
          <br />
          <br />
          Over 1.6+ crore clients place billions of orders every year through
          our powerful ecosystem of investment platforms, contributing over 15%
          of all Indian retail trading volumes.
        </div>

        <div className={styles.col}>
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.
          <br />
          <br />
          Rainmatter, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital markets.
          <br />
          <br />
          And yet, we are always up to something new every day. Catch up on the
          latest updates on our blog or see what the media is saying about us or
          learn more about our business and product philosophies.
        </div>
      </div>
<div className={styles.peopleWrapper}>
  <h3>People</h3>

  <div className={styles.personRow}>
    <div className={styles.personLeft}>
      <img src="/media/nithinKamath.jpg" alt="Nithin Kamath" />
      <h5>Nithin Kamath</h5>
      <p className={styles.role}>Founder, CEO</p>
    </div>

    <div className={styles.personRight}>
      <p>
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
        he faced during his decade long stint as a trader. Today, Zerodha has changed
        the landscape of the Indian broking industry.
      </p>
      <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
        and the Market Data Advisory Committee (MDAC).
      </p>
      <p>
        Playing basketball is his zen.
      </p>
      <p>
        Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
        <a href="#">Twitter</a>
      </p>
    </div>
  </div>
</div> 
    </>
  );
}

export default AboutPage;
