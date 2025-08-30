import React, { useState } from "react";

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  const equityData = [
    {
      charge: "Brokerage",
      delivery: "Zero Brokerage",
      intraday: "0.03% or Rs. 20/executed order whichever is lower",
    },
    {
      charge: "STT/CTT",
      delivery: "0.1% on buy & sell",
      intraday: "0.025% on the sell side",
    },
    {
      charge: "Transaction charges",
      delivery: "NSE: 0.00297%, BSE: 0.00375%",
      intraday: "NSE: 0.00297%, BSE: 0.00375%",
    },
    {
      charge: "GST",
      delivery: "18% on (brokerage + SEBI charges + transaction charges)",
      intraday: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      delivery: "₹10 / crore",
      intraday: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      delivery: "0.015% or ₹1500 / crore on buy side",
      intraday: "0.003% or ₹300 / crore on buy side",
    },
  ];

  const foData = [
    {
      charge: "Brokerage",
      futures: "0.03% or Rs. 20/executed order whichever is lower",
      options: "Flat Rs. 20 per executed order",
    },
    {
      charge: "STT/CTT",
      futures: "0.02% on the sell side",
      options: "0.05% on the sell side",
    },
    {
      charge: "Transaction charges",
      futures: "NSE: 0.00173%, BSE: 0",
      options: "NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)",
    },
    {
      charge: "GST",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      futures: "₹10 / crore",
      options: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      futures: "0.002% or ₹200 / crore on buy side",
      options: "0.003% or ₹300 / crore on buy side",
    },
  ];

  const currencyData = [
    {
      charge: "Brokerage",
      futures: "0.03% or ₹20/executed order whichever is lower",
      options: "₹20/executed order",
    },
    {
      charge: "STT/CTT",
      futures: "No STT",
      options: "No STT",
    },
    {
      charge: "Transaction charges",
      futures: "NSE: 0.00035%, BSE: 0.00045%",
      options: "NSE: 0.0311%, BSE: 0.001%",
    },
    {
      charge: "GST",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      futures: "₹10 / crore",
      options: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      futures: "0.0001% or ₹10 / crore on buy side",
      options: "0.0001% or ₹10 / crore on buy side",
    },
  ];

  const commodityData = [
    {
      charge: "Brokerage",
      futures: "0.03% or Rs. 20/executed order whichever is lower",
      options: "₹20/executed order",
    },
    {
      charge: "STT/CTT",
      futures: "0.01% on sell side (Non-Agri)",
      options: "0.05% on sell side",
    },
    {
      charge: "Transaction charges",
      futures: "MCX: 0.0021%, NSE: 0.0001%",
      options: "MCX: 0.0418%, NSE: 0.001%",
    },
    {
      charge: "GST",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      futures: "Agri: ₹1 / crore, Non-agri: ₹10 / crore",
      options: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      futures: "0.002% or ₹200 / crore on buy side",
      options: "0.003% or ₹300 / crore on buy side",
    },
  ];

  const renderTable = (data, columns) => (
    <div className="table-responsive mb-5">
      <table className="table table-bordered" style={{ fontSize: "0.9rem" }}>
        <thead style={{ backgroundColor: "#f8f9fa" }}>
          <tr>
            <th style={{ 
              padding: "15px", 
              fontWeight: "500", 
              color: "#424242",
              borderColor: "#dee2e6",
              width: "25%"
            }}>
              Charges
            </th>
            {columns.map((col, idx) => (
              <th key={idx} style={{ 
                padding: "15px", 
                fontWeight: "500", 
                color: "#424242",
                borderColor: "#dee2e6"
              }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#fff" : "#f8f9fa" }}>
              <td style={{ 
                padding: "15px", 
                fontWeight: "500", 
                color: "#424242",
                borderColor: "#dee2e6"
              }}>
                {row.charge}
              </td>
              {Object.keys(row)
                .slice(1)
                .map((key, colIdx) => (
                  <td key={colIdx} style={{ 
                    padding: "15px", 
                    color: "#666",
                    borderColor: "#dee2e6",
                    lineHeight: "1.5"
                  }}>
                    {row[key]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container" style={{ padding: "60px 0" }}>
      {/* Tabs */}
      <div style={{ 
        borderBottom: "1px solid #dee2e6", 
        marginBottom: "40px",
        display: "flex",
        gap: "40px"
      }}>
        {[
          { key: "equity", label: "Equities" },
          { key: "fo", label: "F&O" },
          { key: "currency", label: "Currency" },
          { key: "commodity", label: "Commodity" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              background: "none",
              border: "none",
              padding: "10px 0",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              color: activeTab === tab.key ? "#387ed1" : "#666",
              borderBottom: activeTab === tab.key ? "2px solid #387ed1" : "none",
              transition: "color 0.2s ease"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "equity" && (
        <>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#424242",
            marginBottom: "30px"
          }}>
            Equities
          </h2>
          {renderTable(equityData, ["Equity delivery", "Equity intraday"])}
        </>
      )}
      {activeTab === "fo" && (
        <>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#424242",
            marginBottom: "30px"
          }}>
            F&O
          </h2>
          {renderTable(foData, ["F&O - Futures", "F&O - Options"])}
        </>
      )}
      {activeTab === "currency" && (
        <>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#424242",
            marginBottom: "30px"
          }}>
            Currency
          </h2>
          {renderTable(currencyData, ["Currency futures", "Currency options"])}
        </>
      )}
      {activeTab === "commodity" && (
        <>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#424242",
            marginBottom: "30px"
          }}>
            Commodity
          </h2>
          {renderTable(commodityData, [
            "Commodity futures",
            "Commodity options",
          ])}
        </>
      )}

      {/* Calculator link */}
      <div className="text-center" style={{ marginTop: "50px", paddingTop: "20px" }}>
        <a
          href="https://linktr.ee/anup_kundu"
          style={{ 
            color: "#387ed1", 
            textDecoration: "none",
            fontSize: "1rem"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Calculate your costs upfront using our brokerage calculator →
        </a>
      </div>
    </div>
  );
};

export default Brokerage;
