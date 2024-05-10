import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-10 contactInfo offset-lg-2 mb-5">
          <h2>Call</h2>
          <p class="lead">
            <a href="tel: 800-999-2782">800-999-APTA (2782)</a>&nbsp; |&nbsp;{" "}
            <a href="tel: 703-684-2782">703-684-APTA (2782)</a>
          </p>
          <p class="lead">
            Monday-Friday, 8 a.m.-6 p.m. ET.
            <br />
            Our fax number is 703-684-7343.
          </p>
          <h2>Email</h2>
          <p class="lead">
            <a href="/need-help-contact-apta/email-freshdesk">
              Complete this quick form
            </a>{" "}
            to receive support from our team. You will receive an initial
            response in a maximum of two business days.
          </p>
          <h2>Chat</h2>
          <p class="lead">
            Look for the live chat icon at the bottom right corner of this page
            to begin a live chat with our Member Success staff.
          </p>
          <p class="lead">Monday-Friday, 8:00 a.m.-6:00 p.m. ET.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
