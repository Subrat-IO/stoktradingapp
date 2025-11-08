import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-5 p-5">404 — Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>

          <Link to="/">
            <button className="btn btn-primary mb-5 px-5 py-2 mt-3">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
