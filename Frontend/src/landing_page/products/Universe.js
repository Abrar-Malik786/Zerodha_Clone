import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" alt="smallcaseLogo" />
          <p className="text-small text-muted">Thematic investing platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/streakLogo.png"
            alt="streak"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">Systematic trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/tijori.svg" alt="Tijori" style={{ width: "35%" }} />
          <p className="text-small text-muted">
            Investment Reasearch Platform.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="zerodhaFundoue"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">Our asset management venture.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" alt="sensibullo" />
          <p className="text-small text-muted">Option Trading Platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/dittoLogo.png"
            alt="DittoPhoto"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
export default Universe;
