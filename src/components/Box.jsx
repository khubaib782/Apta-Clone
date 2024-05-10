import React from "react";
import "./Box.css";

function Box() {
  return (
    <div className="container-fluid">
      <div className="row pl-3 mt-5">
        <div className="col-sm-12 col-md-6">
          <div className="div-adj">
            <div className="Box1">
              <div className="text-div1">
                <h2 className="h1 title-large ">APTA Reports</h2>
                <p>
                  Be empowered with data and insight covering the most pressing
                  issues in the profession with reports from APTA.
                </p>
                <button type="button" className="btn btn-outline-light button1">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="div-adj">
            <div className=" Box2">
              <div className="text-div2">
                <h2 className="h1 title-large ">VOLUNTEER OPTIONS</h2>
                <p>
                  Discover ways that you can know and grow your value — APTA
                  members share their insights
                </p>
                <button type="button" className="btn btn-outline-light button2">
                  Apta Fit For Practice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
