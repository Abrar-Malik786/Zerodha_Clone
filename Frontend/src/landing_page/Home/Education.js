import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" alt="education banner" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market Education</h1>
          <p>
            varsity,the largest online stock market education book in the world
            covering everything from the basic to the advance trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            versity
          </a>
          <p className="mt-5">
            Trading Q&a , the most active trading and investment community in
            india for allyour market related query
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Trading Q&A
          </a>
        </div>
      </div>
    </div>
  );
}
export default Education;
