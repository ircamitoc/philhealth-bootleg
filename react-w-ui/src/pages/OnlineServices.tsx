import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const onlineServicesStyle = {
  backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
};

function OnlineServices() {
  return (
    <div className="Members" style={onlineServicesStyle}>
      <Header />
      <Navbar />
      <div>Links</div>
    </div>
  );
}

export default OnlineServices;
