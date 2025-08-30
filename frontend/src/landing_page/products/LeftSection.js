import React from "react";

function LeftSection({
  imageURL,
  producrHeading,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <div className="row align-items-center">
        <div className="col-6">
          <img 
            src={imageURL} 
            alt="img-products" 
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
        <div className="col-6" style={{ paddingLeft: "60px" }}>
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
          <div style={{ marginBottom: "30px" }}>
            {tryDemo && (
              <a 
                href={tryDemo} 
                style={{ 
                  color: "#387ed1", 
                  textDecoration: "none",
                  marginRight: "40px",
                  fontSize: "1rem"
                }}
              >
                Try demo →
              </a>
            )}
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
          <div>
            {googlePlay && (
              <a href={googlePlay} style={{ marginRight: "20px" }}>
                <img 
                  src="./assets/googlePlayBadge.svg" 
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img 
                  src="./assets/appstoreBadge.svg" 
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
