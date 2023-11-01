import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import startServer from './server'
 
dotenv.config()
 
const app = express();
 
app.use(helmet());
app.use(cors());
app.use(express.json())
 
startServer(app);