import React from "react";

function RightSection({
  imageURL,
  producrHeading,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <div className="row align-items-center">
        <div className="col-6" style={{ paddingRight: "60px" }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "400",
            color: "#424242",
            marginBottom: "20px"
          }}>
            {producrHeading}
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "30px"
          }}>
            {productDescription}
          </p>
          {learnMore && (
            <a 
              href={learnMore}
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "1rem"
              }}
            >
              Learn more →
            </a>
          )}
        </div>
        <div className="col-6">
          <img 
            src={imageURL} 
            alt="img-url"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
