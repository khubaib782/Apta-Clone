import React from "react";
import Navbar from "../Navbar";
import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import Dropdown from "./Dropdown";
import BannerContent from "./BannerContent";
import Footer from "../Footer";

function ContactUs() {
  return (
    <div className="contact-container">
      <Navbar />
      <ContactBanner />
      <ContactInfo />
      <Dropdown />
      <BannerContent />
      <Footer />
    </div>
  );
}

export default ContactUs;
