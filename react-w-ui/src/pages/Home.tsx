import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { Article, getArticles } from "../services/articles";
import { Grid } from "@mui/material";
import Hero from "../components/Hero";

const homeStyle = {
  backgroundImage: `url('https://www.philhealth.gov.ph/images/bg_green.jpg')`,
};

function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  console.log(articles.length)
  
  useEffect(()=> {
    getArticles().then(articles=>setArticles(articles));
  }, []);

  return (
    <div className="Home" style={homeStyle}>
      <Header />
      <Navbar />
      <Carousel />
      <Grid container>
          {
            articles.map((article)=> {
              return <Hero title={article.title} body1={article.body} />
            })
          }
        </Grid>
      <div>Links</div>
    </div>
  );
}

export default Home;
