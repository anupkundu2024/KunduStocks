import React, { useState } from "react";

function Support() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const supportStyle = {
    padding: "40px 0",
    backgroundColor: "#f8f9fa",
  };

  const dropdownStyle = {
    marginBottom: "15px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const noticeBoxStyle = {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffeaa7",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "30px",
  };

  const quickLinksStyle = {
    backgroundColor: "white",
    border: "1px solid #dee2e6",
    borderRadius: "8px",
    width: "100%",
  };

  const dropdownMenuFix = {
    display: "block",
    position: "static",
    float: "none",
  };

  return (
    <div style={supportStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <h2 className="mb-4 text-primary">Support Portal</h2>

            {/* Account Opening */}
            <div className="dropdown w-100 mb-3" style={dropdownStyle}>
              <button
                className="btn w-100 bg-white text-primary dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown("accountOpening")}
                aria-expanded={openDropdown === "accountOpening"}
                style={{
                  border: "none",
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Account Opening
              </button>
              {openDropdown === "accountOpening" && (
                <ul
                  className="dropdown-menu w-100 shadow-sm show"
                  style={dropdownMenuFix}
                >
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Resident individual
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Minor
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Non Resident Indian (NRI)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Company, Partnership, HUF and LLP
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Glossary
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Zerodha Account */}
            <div className="dropdown w-100 mb-3" style={dropdownStyle}>
              <button
                className="btn w-100 btn-outline-primary dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown("zerodhaAccount")}
                aria-expanded={openDropdown === "zerodhaAccount"}
                style={{
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Your Zerodha Account
              </button>
              {openDropdown === "zerodhaAccount" && (
                <ul
                  className="dropdown-menu w-100 shadow-sm show"
                  style={dropdownMenuFix}
                >
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Your Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Account modification
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Client Master Report (CMR) and Depository Participant (DP)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Transfer and conversion of securities
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Kite */}
            <div className="dropdown w-100 mb-3" style={dropdownStyle}>
              <button
                className="btn w-100 btn-outline-primary dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown("kite")}
                aria-expanded={openDropdown === "kite"}
                style={{
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Kite
              </button>
              {openDropdown === "kite" && (
                <ul
                  className="dropdown-menu w-100 shadow-sm show"
                  style={dropdownMenuFix}
                >
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      IPO
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Trading FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Margin Trading Facility (MTF) and Margins
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Alerts and Nudges
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      General
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Funds */}
            <div className="dropdown w-100 mb-3" style={dropdownStyle}>
              <button
                className="btn w-100 btn-outline-primary dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown("funds")}
                aria-expanded={openDropdown === "funds"}
                style={{
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Funds
              </button>
              {openDropdown === "funds" && (
                <ul
                  className="dropdown-menu w-100 shadow-sm show"
                  style={dropdownMenuFix}
                >
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Add money
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Withdraw money
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Add bank accounts
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      eMandates
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Console */}
            <div className="dropdown w-100 mb-3" style={dropdownStyle}>
              <button
                className="btn w-100 btn-outline-primary dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown("console")}
                aria-expanded={openDropdown === "console"}
                style={{
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Console
              </button>
              {openDropdown === "console" && (
                <ul
                  className="dropdown-menu w-100 shadow-sm show"
                  style={dropdownMenuFix}
                >
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Corporate actions
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Reports
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Segments
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Coin */}
            <div className="dropdown w-100 mb-3" style={dropdownStyle}>
              <button
                className="btn w-100 btn-outline-primary dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown("coin")}
                aria-expanded={openDropdown === "coin"}
                style={{
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Coin
              </button>
              {openDropdown === "coin" && (
                <ul
                  className="dropdown-menu w-100 shadow-sm show"
                  style={dropdownMenuFix}
                >
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Mutual funds
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      National Pension Scheme (NPS)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Fixed Deposit (FD)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Features on Coin
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      Payments and Orders
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2"
                      href="https://linktr.ee/anup_kundu"
                    >
                      General
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Notices + Quick Links */}
          <div className="col-lg-3 col-md-4">
            <div style={noticeBoxStyle}>
              <h6 className="text-warning mb-3">📢 Important Notices</h6>
              <div className="mb-3">
                <a
                  href="https://linktr.ee/anup_kundu"
                  className="text-decoration-none text-dark"
                >
                  <small>
                    Exclusion of F&O contracts on 8 securities from August 29,
                    2025
                  </small>
                </a>
              </div>
              <div>
                <a
                  href="https://linktr.ee/anup_kundu"
                  className="text-decoration-none text-dark"
                >
                  <small>
                    Revision in expiry day of Index and Stock derivatives
                    contracts
                  </small>
                </a>
              </div>
            </div>

            <table className="table table-striped" style={quickLinksStyle}>
              <thead className="table-primary">
                <tr>
                  <th className="p-3">Quick Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">
                    <a
                      href="https://linktr.ee/anup_kundu"
                      className="text-decoration-none"
                    >
                      1. Track account opening
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <a
                      href="https://linktr.ee/anup_kundu"
                      className="text-decoration-none"
                    >
                      2. Track segment activation
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <a
                      href="https://linktr.ee/anup_kundu"
                      className="text-decoration-none"
                    >
                      3. Intraday margins
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <a
                      href="https://linktr.ee/anup_kundu"
                      className="text-decoration-none"
                    >
                      4. Call & Trade
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <a
                      href="https://linktr.ee/anup_kundu"
                      className="text-decoration-none"
                    >
                      5. Kite user manual
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
