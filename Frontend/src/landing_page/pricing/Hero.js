import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom  text-center">
        <h2>Charges</h2>
        <h5 className="text-muted mt-3 ">List of all charges and taxe.</h5>
        <div className="col-4 p-5 text-muted">
          <img src="media/pricing0.svg" alt="pricin zero" />
          <h1>Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5 text-muted">
          <img src="media/pricing20.svg" alt="pricin twenty" />
          <h1>Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trade.
          </p>
        </div>
        <div className="col-4 p-5 text-muted">
          <img src="media/pricing0.svg" alt="pricin zero" />
          <h1>Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charge.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
