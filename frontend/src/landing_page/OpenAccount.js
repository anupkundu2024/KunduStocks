import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          style={{
            backgroundColor: "#3d7ed1",
            width: "18%",
            margin: "0 auto",
            color: "white",
            borderRadius: "5px",
            border: "2px solid ",
          }}
          className="p-2 "
        >
          <b>Sign up for free</b>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
