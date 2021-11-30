import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

// // component
import Connection from "./database/db.js";
import Routes from './routes/Route.js'


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Routes);

const PORT = 8000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username,password);
app.listen(PORT, () => console.log(`Server is running Successfully on port ${PORT}`));


