import React from "react";

function Award() {
  return (
    <div className="container p-5">
      <div className="row">
        {/* left Side */}
        <div className="col-6 p-3">
          <h4>Trust with confidence</h4>
          <br></br>
          <h3>Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India's largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <br></br>
          <h3>No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a
              href="https://www.google.com/ "
              style={{ textDecoration: "none" }}
            >
              Our philosophies.
            </a>
          </p>
          <br></br>
          <h3>The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <br></br>
          <h3>Do better with money</h3>
          <p>
            With initiatives like &nbsp;
            <a
              href="https://www.google.com/"
              style={{ textDecoration: "none" }}
            >
              Nudge
            </a>{" "}
            and
            <a
              href="https://www.google.com/"
              style={{ textDecoration: "none" }}
            >
              &nbsp; Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        {/* Right side */}
        <div className="col-6 ">
          <img
            src="../assets/ecosystem.png"
            className="mb-4"
            style={{ height: "516.8px", width: "507.49px" }}
            alt="ecosystem-img"
          ></img>
          <div className="ms-4">
            <a
              href="https://google.com"
              className="me-5"
              style={{ textDecoration: "none" }}
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href="https://google.com"
              className="ms-3"
              style={{ textDecoration: "none" }}
            >
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4" style={{ textAlign: "center" }}>
        <img src="../assets/pressLogos.png" alt="press=Logos"></img>
      </div>
    </div>
  );
}

export default Award;
