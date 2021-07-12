import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! It's a dead end</h1>
        <Link to="/">
          <button className="btn">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
