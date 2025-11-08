import React from "react";
import styles from "./style.module.css";

function Education() {
  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" alt="" />
        </div>
        <div className="col-6">
          <div className={`${styles.rightsection}`}>
            <h1>Free And Open Market Education</h1>
            <div className={`${styles.contents}`}>
              <p className={`${styles.paragraph}`}>
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading
              </p>

              <a href="">
                versity <i class="bx bx-arrow-back bx-rotate-180"></i>
              </a>
            </div>
            <div className={`${styles.contents}`}>
              <p className={`${styles.paragraph}`}>
                Trading Q&A, the most active trading and investment community in india for all your market related queries.
              </p>

              <a href="">Trading Q&A<i class="bx bx-arrow-back bx-rotate-180"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
