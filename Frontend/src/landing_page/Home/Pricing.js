import React from "react";
function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2"> Unbeatble pricing</h1>
          <p>
            We pioneered he concept of discounting broking pricetransparancy in
            india.Flat fee and nonhidden charge
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            see pricing
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">0</h1>
              <p>
                free equity delivery and
                <br /> direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">20</h1>
              <p>Intraday and f&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
