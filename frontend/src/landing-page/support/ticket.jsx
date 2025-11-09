import React from "react";
import styles from "./style.module.css"



function Ticket() {
  return (
    <div className={`${styles.container}`}>
      <h1 className="text-center m-5 p-5">
        To create a ticket select a relevant topic
      </h1>
      <div className={`row ${styles.rowclass}`}>
        <div className="col-4">
          <h4>
            <i class="bx bxs-plus-circle"></i> Account Opening
          </h4>
           <ul className={`${styles.listitems}`}>
            <li><a href="/">Online Account Opening</a></li>
            <li><a href="/">Offline Account Opening</a></li>
            <li><a href="/">Company partenership and HUF account opening</a></li>
            <li><a href="/">NRI account opening</a></li>
            <li><a href="/">Charges at Zerodha</a></li>
            <li><a href="/">Getting Started</a></li>
          </ul>
        </div>
        
        <div className="col-4">
          <h4>
            <i class="bx bxs-user"></i> Your Zerodha Account
          </h4>
            <ul className={`${styles.listitems}`}>
            <li><a href="/">Login Credentials</a></li>
            <li><a href="/">AccountModification and Segment Addition</a></li>
            <li><a href="/">DP ID and bank details</a></li>
            <li><a href="/">Your Profile</a></li>
            <li><a href="/">Transfer And Conversion of shares</a></li>
          </ul>
           
        </div>
        <div className="col-4">
          <h4>
            <i class="bx bx-table"></i> Your Zerodha Account
          </h4>
          <ul className={`${styles.listitems}`}>
          <li><a href="/">Margin Leverage Product and order types</a></li>
            <li><a href="/">Kite Web And Mobile</a></li>
            <li><a href="/">Trading faq</a></li>
            <li><a href="/">Corporate Actions</a></li>
            <li><a href="/">Sentine</a></li>
            <li><a href="/">Kite Api</a></li>
          </ul>
        </div>
      </div>
      <div className={`row mt-5  mb-2 ${styles.rowclass}`}>
        <div className="col-4">
          <h4>
            <i class="bx bxs-plus-circle"></i> Funds
          </h4>
           <ul className={`${styles.listitems}`}>
            <li><a href="/">Online Account Opening</a></li>
            <li><a href="/">Offline Account Opening</a></li>
            <li><a href="/">Company partenership and HUF account opening</a></li>
            <li><a href="/">NRI account opening</a></li>
            <li><a href="/">Charges at Zerodha</a></li>
            <li><a href="/">Getting Started</a></li>
          </ul>
        </div>
        
        <div className="col-4">
          <h4>
            <i class="bx bxs-user"></i> Console
          </h4>
            <ul className={`${styles.listitems}`}>
            <li><a href="/">Login Credentials</a></li>
            <li><a href="/">AccountModification and Segment Addition</a></li>
            <li><a href="/">DP ID and bank details</a></li>
            <li><a href="/">Your Profile</a></li>
            <li><a href="/">Transfer And Conversion of shares</a></li>
          </ul>
           
        </div>
        <div className="col-4">
          <h4>
            <i class="bx bx-table"></i> Coin
          </h4>
          <ul className={`${styles.listitems}`}>
          <li><a href="/">Margin Leverage Product and order types</a></li>
            <li><a href="/">Kite Web And Mobile</a></li>
            <li><a href="/">Trading faq</a></li>
            <li><a href="/">Corporate Actions</a></li>
            <li><a href="/">Sentine</a></li>
            <li><a href="/">Kite Api</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
