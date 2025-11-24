import React from "react";
import styles from "./style.module.css";

function Education() {
  return (
    <div className={`container ${styles.container}`}>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img className="img-fluid" src="media/education.svg" alt="" />
        </div>

        <div className="col-12 col-md-6">
          <div className={styles.rightsection}>
            <h1 className={styles.title}>Free And Open Market Education</h1>

            <div className={styles.contents}>
              <p className={styles.paragraph}>
                Varsity, the largest online stock market education platform
                covering basics to advanced trades.
              </p>
              <a href="/">
                Varsity <i className="bx bx-arrow-back bx-rotate-180"></i>
              </a>
            </div>

            <div className={styles.contents}>
              <p className={styles.paragraph}>
                Trading Q&A, India’s biggest discussion platform for market
                queries.
              </p>
              <a href="/">
                Trading Q&A <i className="bx bx-arrow-back bx-rotate-180"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
