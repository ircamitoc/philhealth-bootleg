import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { Article, getArticles } from "../services/articles";
import { Grid } from "@mui/material";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navbarv2";


function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  console.log(articles.length)
  
  useEffect(()=> {
    getArticles().then(articles=>setArticles(articles));
  }, []);

  return (
    <div className="Home" style={homeStyle}>
      {/* <Header /> */}
      <NavigationBar/>
      <Carousel />
      <Grid container>
          {
            articles.map((article)=> {
              return <Hero image={article.image} title={article.title} body1={article.body} />
            })
          }
        </Grid>
      <Footer />
    </div>
  );
}

export default Home;

const homeStyle = {
  // backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
  background: "#FEFBF7",
};