import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const aboutUsStyle = {
  backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
};

function AboutUs() {
  return (
    <div className="AboutUs" style={aboutUsStyle}>
      <Header />
      <Navbar />
      {/* <Carousel />
      <Grid container>
        {articles.map((article) => (
          <Hero image={article.image} title={article.title} body1={article.body} />
        ))}
      </Grid> */}
      <div>Links</div>
    </div>
  );
}

export default AboutUs;
