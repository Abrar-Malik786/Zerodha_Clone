import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className=" text-center">
        <img
          src="/media/homeHero%20(1).png"
          alt="Home hero banner"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <br />
        <p>
          Online Platform to invest in stock , derivatives, mutual fund, and
          more
        </p>
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
export default Hero;
