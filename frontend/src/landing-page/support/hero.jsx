import React from "react";
import styles from "./style.module.css";

function Hero() {
  return (
    <div className={`bg-primary ${styles.Herocontainer}`}>
      <div className={`${styles.heroheading}  text-center col-6 d-flex`}>
       <div>
         <h3>Suppourt Portal</h3> 
       </div>
       <div>
         <p><a className={`${styles.tracktickets}`} href="/">Track tickets</a></p> 

         <div className={`${styles.featured}`}>
          <h3>Featured</h3>
          <ol className={`${styles.listings} text-start`}>
            <li><a href="/">Current takeovers and Delisting-january 2024</a></li>
            <li><a href="/">Latest LIstings</a></li>
          </ol>
         </div>
       </div>
      </div>
      <div className={`${styles.answer}`}>
        <h2>
          Search For an answer or browse help topics <br /> to create ticket
        </h2>
        <input type="text" name="" id="" className={`${styles.inputarea}`} placeholder="Search here your ticket"/>
        <ul className={`${styles.listings} d-flex`}>
          <li><a href="/">Track account opening</a></li>&nbsp;
          <li><a href="/">Track segment activation</a></li>
          <li><a href="/">Intraday</a></li>
          <li><a href="/">margins</a></li>
          <li><a href="/">Kite user manual</a></li>
        </ul>
      
      </div>
     
    </div>
  );
}

export default Hero;
