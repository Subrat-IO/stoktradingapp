import React from "react";
import styles from "./style.module.css";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt={productName} className={styles.productImg} />
        </div>

        <div className="col-12 col-md-6">
          <h1 className={styles.title}>{productName}</h1>
          <p className={styles.desc}>{productDescription}</p>

          <div className="mt-3 d-flex flex-wrap gap-2">
            {tryDemo && (
              <a
                href={tryDemo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Demo
              </a>
            )}
            {learnMore && (
              <a
                href={learnMore}
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            )}
          </div>

          <div className="mt-4 d-flex gap-2 align-items-center flex-wrap">
            {googlePlay && (
              <a href={googlePlay} target="_blank">
                <img
                  src="/media/googlePlayBadge.svg"
                  alt="Google Play"
                  className={styles.storeBadge}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore} target="_blank">
                <img
                  src="/media/appstoreBadge.svg"
                  alt="App Store"
                  className={styles.storeBadge}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
