import React from "react";

function Hero() {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <div className="row text-center">
        <div className="col-12">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "400",
              color: "#424242",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Pricing
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "0",
              lineHeight: "1.6",
            }}
          >
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>

      <div className="row" style={{ padding: "80px 0 40px 0" }}>
        <div className="col-4 text-center" style={{ padding: "40px 20px" }}>
          <img
            src="./assets/pricingEquity.svg"
            alt="Free equity delivery"
            style={{ height: "80px", marginBottom: "30px" }}
          />
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Free equity delivery
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>
        <div className="col-4 text-center" style={{ padding: "40px 20px" }}>
          <img
            src="./assets/intradayTrades.svg"
            alt="Intraday and F&O trades"
            style={{ height: "80px", marginBottom: "30px" }}
          />
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Intraday and F&O trades
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 text-center" style={{ padding: "40px 20px" }}>
          <img
            src="./assets/pricingMF.svg"
            alt="Free direct MF"
            style={{ height: "80px", marginBottom: "30px" }}
          />
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Free direct MF
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;