import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5 p-5 mb-5">
      <h2 className="fw-semibold">Zerodha Products</h2>
      <h5 className="mt-3 opacity-75">
        Sleek, modern, and intuitive trading platforms
      </h5>

      <p className="mt-4">
        Check out for{" "}
        <a href="/" style={{ textDecoration: "none" }}>
          investment offerings <i className="bx bx-right-arrow-alt"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
