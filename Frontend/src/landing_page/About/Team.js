import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3  mt-5  border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="nitin"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Nithin kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. <br />
            Today, Zerodha has changed the landscape of the Indian broking
            industry.
            <br />
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
