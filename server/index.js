import connection from './database/db.js';
import Routes from './routes/route.js'

import express, { application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 9000;

const app = express()
dotenv.config();
app.use(cors())
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", Routes)

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username,password);

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})