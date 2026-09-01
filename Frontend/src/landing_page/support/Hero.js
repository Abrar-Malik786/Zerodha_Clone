import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="suppportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className="row p-5 m-5 ">
        <div className="col-6 p-3 ">
          <h1 className="fs-3">
            Search for an answer or browse to help topic to create a ticket
          </h1>
          <input placeholder="Eg. how do i activate F&O" /> <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margin</a>
          <a href="">Kite user mannual</a>
        </div>
        <div className="col-6  p-3 ">
          <h1 className="fs-3">feauter</h1>
          <ol>
            <li>
              <a href="">Current Takeover and Delisting - january 2024 </a>
            </li>
            <li>
              <a href=""> Latest Intraday leverage - MIS and CO </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
export default Hero;
