import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      
      <LeftSection
        imageURL="./assets/products-kite.png"
        producrHeading="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      
      <RightSection
        imageURL="./assets/console.png"
        producrHeading="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
      />
      
      <LeftSection
        imageURL="./assets/products-coin.png"
        producrHeading="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        googlePlay="#"
        appStore="#"
      />
      
      <RightSection
        imageURL="./assets/kiteconnect.png"
        producrHeading="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#"
      />
      
      <LeftSection
        imageURL="./assets/varsity.png"
        producrHeading="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
      />
      
      <div className="container text-center" style={{ padding: "40px 0" }}>
        <p style={{ 
          fontSize: "1rem", 
          color: "#666",
          margin: "0"
        }}>
          Want to know more about our technology stack? Check out the{" "}
          <a 
            href="https://zerodha.tech/" 
            style={{ 
              color: "#387ed1", 
              textDecoration: "none" 
            }}
          >
            Zerodha.tech
          </a>
          {" "}blog.
        </p>
      </div>

      <Universe />
    </>
  );
}

export default ProductsPage;
