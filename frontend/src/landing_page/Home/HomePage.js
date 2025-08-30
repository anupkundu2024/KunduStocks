import React from "react";
// import Navbar from "../Navbar";
import Hero from "./Hero";
import Award from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
// import Footer from "../Footer";

function HomePage() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero></Hero>
      <Award></Award> {/* teacher stats */}
      <Pricing></Pricing>
      <Stats></Stats> {/* stats==education */}
      <OpenAccount></OpenAccount>
      {/* <Footer></Footer> */}
    </>
  );
}

export default HomePage;
