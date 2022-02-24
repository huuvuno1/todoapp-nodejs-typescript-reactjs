import 'dotenv/config'
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import './database'
import router from './routes';
import errorHanlder from './routes/exceptions';
import fileUpload from 'express-fileupload';

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(fileUpload({ limits: { fileSize: 4096 }, defCharset: 'utf8' }));

// routes
app.use(router)

// error hanlder
app.use(errorHanlder)

export default app