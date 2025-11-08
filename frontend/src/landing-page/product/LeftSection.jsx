import React from "react";

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
          <img
            src={imageURL}
            alt={productName}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12 ml-5  col-md-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mt-3">
            {tryDemo && (
              <a
                href={tryDemo}
                className="btn btn-primary me-2"
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

          <div className="mt-4 d-flex gap-2 align-items-center">
            {googlePlay && (
              <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                <img
                  src="/media/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ height: 40 }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore} target="_blank" rel="noopener noreferrer">
                <img
                  src="/media/appstoreBadge.svg"
                  alt="App Store"
                  style={{ height: 40 }}
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
