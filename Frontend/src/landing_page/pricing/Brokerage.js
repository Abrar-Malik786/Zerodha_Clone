import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5   text-center border-top">
        <div className="col-8 p-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculater</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted "
          ></ul>
        </div>
        <div className="col-4 p-5 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charge</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Brokerage;
