import React from "react";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="mt-5">404</h2>
        <p>
          The requested URL was not found on this server.
          <i>That,s all we know</i>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
