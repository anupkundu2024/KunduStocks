import React from "react";

function Hero() {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <div className="row align-items-center">
        <div className="col-6">
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "400", 
            color: "#424242",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Technology
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "#666", 
            marginBottom: "20px",
            lineHeight: "1.6"
          }}>
            Sleek, modern, and intuitive trading platforms
          </p>
          <p style={{ fontSize: "1rem", color: "#666" }}>
            Check out our{" "}
            <a 
              href="https://linktr.ee/anup_kundu" 
              style={{ 
                color: "#387ed1", 
                textDecoration: "none"
              }}
            >
              investment offerings →
            </a>
          </p>
        </div>
        <div className="col-6 text-center">
          <img 
            src="./assets/ecosystem.png" 
            alt="Products ecosystem" 
            style={{ width: "90%", maxWidth: "400px" }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
