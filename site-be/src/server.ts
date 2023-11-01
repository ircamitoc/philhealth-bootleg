import * as dotenv from 'dotenv'
import * as core from "express-serve-static-core";
import { SampleData } from './data/datasources';
import { articles } from "./data/articles";
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

  app.get("/data-get", (req, res) => {
    return res.status(200).send(SampleData);
  })

  app.get("/articles/get", (req, res) => {
    getConnection().then(async (db) => {
      const articleC = db.collection('articles').find({});
      const articles = await articleC.toArray();
      console.log("res", articles);
      res.status(200).send(articles);
    })
  })

  app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`)
  })

}

export default startServer;