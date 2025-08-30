import React from "react";

function CreateTicket() {
  return (
    <div
      className="container p-4 "
      style={{ backgroundColor: "#fff", marginTop: "30px" }}
    >
      <div className="row ">
        <h1>Support Portal</h1>
      </div>
      <div class="row pt-5 ">
        <input
          placeholder="Eg: How do i open my account , How do i activate F&O"
          style={{ height: "50px" }}
        />
      </div>
    </div>
  );
}

export default CreateTicket;
