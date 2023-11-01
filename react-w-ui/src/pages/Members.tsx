import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const membersStyle = {
  backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
};

function Members() {
  return (
    <div className="Members" style={membersStyle}>
      <Header />
      <Navbar />
      <div>Links</div>
    </div>
  );
}

export default Members;
