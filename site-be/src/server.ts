import * as dotenv from 'dotenv'
import * as core from "express-serve-static-core";
import { articles } from "./data/articles";
import { navigationData } from "./data/navigation"
import { getConnection } from './db';

dotenv.config()

const startServer = (app: core.Express) => {
  const PORT = process.env.PORT || 3000

  app.get("/health", (req, res) => {
    return res.status(200).send({
      message: "alive"
    });
  })
  app.get("/sim-error", (req, res) => {
    return res.status(500).send({
      message: "This is a simulated error"
    })
  })

  app.get("/articles/get", (req, res) => {
    getConnection().then(async (db) => {
      const articleC = db.collection('articles').find({});
      const articles = await articleC.toArray();
      console.log("res", articles);
      res.status(200).send(articles);
    })
  })

  app.get("/navigation/get", (req, res) => {
    getConnection().then(async (db) => {
      const navData = await db.collection('navigationData').find({}).toArray();
      console.log("navData", navData);
      res.status(200).send(navData);
    });
  });
  


  app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`)
  })

}

export default startServer;