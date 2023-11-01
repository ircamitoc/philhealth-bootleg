import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const ourPartnersStyle = {
  backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
};

function OurPartners() {
  return (
    <div className="Members" style={ourPartnersStyle}>
      <Header />
      <Navbar />
      <div>Links</div>
    </div>
  );
}

export default OurPartners;
