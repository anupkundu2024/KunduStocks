import React from "react";

function Universe() {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <div className="row text-center">
        <div className="col-12" style={{ marginBottom: "60px" }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "400",
            color: "#424242",
            marginBottom: "20px"
          }}>
            The Zerodha Universe
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4" style={{ padding: "20px", marginBottom: "40px" }}>
          <img 
            src="./assets/zerodhaFundhouse.png" 
            alt="Zerodha Fundhouse" 
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: "1.5",
            margin: "0"
          }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4" style={{ padding: "20px", marginBottom: "40px" }}>
          <img 
            src="./assets/sensibullLogo.svg" 
            alt="Sensibull" 
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: "1.5",
            margin: "0"
          }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4" style={{ padding: "20px", marginBottom: "40px" }}>
          <img 
            src="./assets/tijori.svg" 
            alt="Tijori" 
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: "1.5",
            margin: "0"
          }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4" style={{ padding: "20px", marginBottom: "40px" }}>
          <img 
            src="./assets/streakLogo.png" 
            alt="Streak" 
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: "1.5",
            margin: "0"
          }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4" style={{ padding: "20px", marginBottom: "40px" }}>
          <img 
            src="./assets/smallcaseLogo.png" 
            alt="Smallcase" 
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: "1.5",
            margin: "0"
          }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4" style={{ padding: "20px", marginBottom: "40px" }}>
          <img 
            src="./assets/dittoLogo.png" 
            alt="Ditto" 
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: "1.5",
            margin: "0"
          }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        
        <div className="col-12" style={{ marginTop: "40px" }}>
          <button
            style={{
              backgroundColor: "#387ed1",
              color: "white",
              border: "none",
              padding: "12px 40px",
              fontSize: "1.1rem",
              borderRadius: "3px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
