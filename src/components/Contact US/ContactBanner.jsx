import React from "react";
import Banner2 from "../../assets/bannerImage.jpg";
import Overlay from "../../assets/contact-banner.png";
import "./ContactBanner.css";

function ContactBanner() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <img className="BannerCustomize" src={Banner2} alt="Banner" />
        </div>
        <div className="row overlap">
          <div className="col-md-6 overlap-text ">
            <h1 className="overlay-text1">Need Help? Contact Us!</h1>
          </div>
          <div className="col-md-6">
            <img className="imageOverlay1" src={Overlay} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mob-overlay-text pb-4">
          <div className="col-md-12">
            <h1 className="mob-text1">Need Help? Contact Us!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
