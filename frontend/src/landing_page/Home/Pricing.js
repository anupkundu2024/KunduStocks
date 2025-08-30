import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="https://google.com" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Side */}
        <div
          className="col-8 mt-5 mb-5"
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            className="first0"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <img
              src="../assets/pricing0.svg"
              alt="pricing-0"
              style={{ height: "110px", width: "62px", marginRight: "15px" }}
            />
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                margin: 0,
                lineHeight: "1.3",
                marginTop: "60px",
              }}
            >
              Free account
              <br />
              opening
            </p>
          </div>
          <div
            className="second0"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <img
              src="../assets/pricingEquity.svg"
              alt="pricingEquity"
              style={{ height: "110px", width: "62px", marginRight: "15px" }}
            />
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                margin: 0,
                lineHeight: "1.3",
                marginTop: "60px",
              }}
            >
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>
          <div
            className="third0"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <img
              src="../assets/priceimage3.svg"
              alt="pricingMF"
              style={{ height: "110px", width: "62px", marginRight: "15px" }}
            />
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                margin: 0,
                lineHeight: "1.3",
                marginTop: "60px",
              }}
            >
              Intraday and
              <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
