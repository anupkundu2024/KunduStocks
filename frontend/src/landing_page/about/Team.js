import React from "react";

function Team() {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>People</h3>
      <div className="row p-5 mt-5 just">
        <div className="col-5 text-center">
          <img
            className="ml-5"
            src="./assets/akceo.jpg"
            alt="ceo-img"
            style={{
              height: "65%",
              width: "70%",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          ></img>
          <h5 className="mt-3">Anup Kundu</h5>
          <i>
            <p style={{ paddingRight: "50px" }}>
              Founder, CEO <i className="fa-solid fa-face-smile"></i>
            </p>
          </i>
        </div>
        <div className="col-7">
          <p className="fs-6">
            Anup bootstrapped and founded KunduStocks in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            KunduStocks has changed the landscape of the Indian broking
            industry.
            <br></br>
            <br></br>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).<br></br>
            <br></br>
            Playing basketball is his zen.<br></br>
            <br></br>
            Connect on &nbsp;
            <a href="/">Homepage</a> /
            <a
              href="https://linktr.ee/anup_kundu"
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQnA
            </a>
            /
            <a
              href="https://linktr.ee/anup_kundu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>


        <div className="col-4 p-3 mt-5 justpadding">
          <img src="./assets/avater1.jpg" alt="png-img-company" />
          <p className="text-small text-muted ">Nikhil Kamath</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="./assets/avater2.jpg" alt="png-img-company" />
          <p className="text-small text-muted">Seema Patil</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="./assets/avater3.png" alt="png-img-company" />
          <p className="text-small text-muted">Venu Madhav</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="./assets/avater4.jpg" alt="png-img-company" />
          <p className="text-small text-muted">Austin Prakesh</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="./assets/avater5.jpg" alt="png-img-company" />
          <p className="text-small text-muted">Ambika Kundu</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="./assets/avater6.png" alt="png-img-company" />
          <p className="text-small text-muted">Sidam Kundu</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
