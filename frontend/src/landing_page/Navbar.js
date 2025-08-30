import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  border-bottom sticky-top"
      style={{ backgroundColor: "#FFF", height: "60px" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="../assets/kundustocks.png"
            alt="logo"
            className="ms-5"
            style={{ height: "130px ", paddingLeft: "100px" }}
          ></img>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  p-5">
            {/* Signup button */}
            <li className="nav-item">
              <Link className="nav-link active" to="/SignUp">
                Signup
              </Link>
            </li>

            {/* About button */}
            <li className="nav-item">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>

            {/* Products button */}
            <li className="nav-item">
              <Link className="nav-link active" to="Products">
                Products
              </Link>
            </li>

            {/* Pricing Button */}
            <li className="nav-item">
              <Link className="nav-link active" to="/Pricing">
                Pricing
              </Link>
            </li>

            {/* Support Button */}
            <li className="nav-item">
              <Link className="nav-link active" to="/Support">
                Support
              </Link>
            </li>
            <i className="pt-2">
              <i class="fa-solid fa-grip-lines"></i>
            </i>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
