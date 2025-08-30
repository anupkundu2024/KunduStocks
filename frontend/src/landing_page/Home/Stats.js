import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="../assets/education.svg"
            alt="education"
            style={{ height: "358.71px", width: "450.2px" }}
          ></img>
        </div>
        <div className="col-6">
          <h2>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="https://google.com" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <br></br>
          <br></br>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="https://google.com" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
