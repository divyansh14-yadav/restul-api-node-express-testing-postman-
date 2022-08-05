import express from 'express'
import * as url from 'url';
import db from './db/conn.js'


const app=express();

app.use(express.json());


import indexRouter from './routes/index.js'

app.use('/',indexRouter);

app.listen(3000)
console.log("http://localhost:3000")
