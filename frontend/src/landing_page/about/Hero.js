import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row p-5 border-bottom">
        <div className="col-6 p-4">
          <h2 className="fs-4">
            We pioneered the discount broking model in India.<br></br> Now, we are
            breaking ground with our technology.
          </h2>
        </div>
        <div className="col-6 p-4">
          <img src="./assets/homeHero.png" alt="About us" style={{width: "100%"}} />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 p-5">
          <div className="col">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.<br></br>
              <br></br>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India. <p></p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.{" "}
            </p>
          </div>
          <div className="col  ">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
              <br></br>
              <br></br>Rainmatter, our fintech fund and incubator, has invested
              in several fintech startups with the goal of growing the Indian
              capital markets.<br></br>
              <br></br>And yet, we are always up to something new every day.
              Catch up on the latest updates on our blog or see what the media
              is saying about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
