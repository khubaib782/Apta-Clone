import React, { Fragment } from "react";
import bannerImage from "../assets/bannerImage.jpg";
import "./Banner.css";
import overlayImage from "../assets/child.png";

function Banner() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 banner">
            <img src={bannerImage} alt="Banner" />
          </div>
          <div className="row overlap">
            <div className="col-md-5 ">
              <h1 className="overlay-text">
                We are
                <strong> building a community</strong>
                &nbsp;that&nbsp;
                <strong>advances the profession </strong>
                of <br /> physical therapy to <br />
                <strong>improve the health of society</strong>.
              </h1>
            </div>
            <div className="col-7">
              <img className="imageOverlay" src={overlayImage} alt="" />
            </div>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col-md-12">
            <h1 className="mob-text">
              We are
              <strong>
                {" "}
                building a <br /> community
              </strong>
              &nbsp;that&nbsp;
              <strong>advances the profession </strong>
              of <br /> physical therapy to
              <strong>
                improve the health of <br /> society
              </strong>
              .
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Banner;
