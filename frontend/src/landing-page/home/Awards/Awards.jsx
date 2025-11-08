import React from 'react';
import styles from "./style.module.css";

function Awards() {
  return (

    <div className={`container ${styles.container}`} >
      <div className={`row align-items-center ${styles.containercol}`}>

        <img className={`col-6 ${styles.LargestBrokerImg}`} src="/media/largestBroker.svg" alt="LargestBroker" />
        <div className={`col-6 ${styles.LargestBroker}`}>

          <h1 className={`${styles.Large}`}>Largest Stock Broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all reatail order volumes in india daily by trading and investing in.</p>

          <div className={`d-flex ${styles.listitems}`}>
            <ul>
              <li>Futures And options</li>
              <li>Commodity Derivatives</li>
              <li>Currency Derivatives</li>
            </ul>
            <ul>
              <li>Stocks And Ipo</li>
              <li>Direct Mutual Funds</li>
              <li>Bonds and Golds</li>
            </ul>


          </div>
          <div>
            <img className={`${styles.presslogo}`} src="media/pressLogos.png" alt="" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Awards