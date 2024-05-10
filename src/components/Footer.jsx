import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <footer>
            <div className="footer-content">
              <div className="related-sites">
                <h3>Related APTA Sites</h3>
                <ul>
                  <li>APTA Career Center</li>
                  <li>APTA Learning Center</li>
                </ul>
              </div>

              <div className="contact-info">
                <h3>Contact Information</h3>
                <address>
                  3030 Potomac Ave., Suite 100 | Alexandria, VA | 22305-3085
                  <br />
                  800-999-2782
                </address>
              </div>
            </div>

            <div className="legal-info">
              <p className="footer-p">
                All contents © 2024 American Physical Therapy Association. All
                rights reserved.
              </p>
              <p>
                Use of this and other APTA websites constitutes acceptance of
                our Terms & Conditions.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
