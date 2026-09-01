import React from "react";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer rust Zerodha with 3.5+ lakh
            croreworth of equity investment
          </p>
          <h2 className="fs-4">No spam or gimmick</h2>
          <p className="text-muted">
            No, gimmics, spam, "gammification" , or annoying push notification.
            High qualiti app hat ypu use at your pace. the way you like.{" "}
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Not just an app , but a whole ecosystem, our investment in 30+
            fintech startup offer you tailoredervice specificto your need
          </p>
          <h2> Do better with money</h2>
          <p className="text-muted">
            with intiative like nudge kill switch, We dont just facilitate
            transaction, but actively help you do better with money
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/ecosystem.png"
            alt="ecotem banner"
            style={{ width: "100%" }}
          />
          <div classNamea="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products
            </a>
            <a href="">Try kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
