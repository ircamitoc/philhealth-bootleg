import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const downloadsStyle = {
  backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
};

function Downloads() {
  return (
    <div className="Downloads" style={downloadsStyle}>
      <Header />
      <Navbar />
      <div>Links</div>
    </div>
  );
}

export default Downloads;
