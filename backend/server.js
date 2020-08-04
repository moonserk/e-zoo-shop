import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';

import { data } from './data'

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
	useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app = express();

app.get("/api/products", (req, res) => {
	res.send(data.products)
});

app.listen(5000, () => console.log("Server started at  http://localhost:5000"))
