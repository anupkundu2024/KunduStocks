import React from "react";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img
          src="../assets/homeHero.png"
          alt="home-img"
          className="mb-5 "
        ></img>

        <h2 className="mt-5">Invest in everything</h2>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
