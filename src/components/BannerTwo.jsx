import React from "react";
import "./BannerTwo.css";

function BannerTwo() {
  return (
    <div className="background-img position-relative py-64px mb-block-common bg-size-cover">
      <div className="container-fluid">
        <div className="row">
          <div className="grid-container container2 ">
            <div className="grid-adj ">
              <h2 className="h2-adj">Find a Physical Therapist</h2>
              <p className="box-p">
                Our directory provides access to PTs nationwide.
              </p>
              <p>
                <a
                  title="Find a PT Directory"
                  href="http://aptaapps.apta.org/APTAPTDirectory/FindAPTDirectory.aspx"
                >
                  Start Your Search
                </a>{" "}
                |{" "}
                <a title="For APTA Members: Find a PT Profile" href="/">
                  Update Your Profile
                </a>
              </p>
            </div>
            <div className="grid-adj ">
              <h2 className="h2-adj">Choose Physical Therapy</h2>
              <p className="box-p">
                Our ChoosePT website educates the public about the benefits of
                physical therapy.
              </p>
              <p>
                <a title="ChoosePT.com" href="https://www.choosept.com/">
                  Visit ChoosePT.com
                </a>{" "}
                |{" "}
                <a
                  title="ChoosePT Toolkit"
                  href="https://www.choosept.com/toolkit"
                >
                  Help Spread the Word
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
