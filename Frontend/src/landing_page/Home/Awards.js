import React from "react";
function Awards() {
  return (
    <div claassName="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" alt="laret Broker " />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock Broker in India</h1>
          <p className="mb-5">
            2+ million zerodha Client contribute to over 15% of all volume in
            india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>
                  <p> Future and option</p>
                </li>
                <li>
                  <p> Commodity Derivative</p>
                </li>
                <li>
                  <p>Currency Derivative</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stock and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual fund</p>
                </li>
                <li>
                  <p>Bond and Govt. securitie</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/pressLogos.png"
            alt=" pressLogo banner"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Awards;
