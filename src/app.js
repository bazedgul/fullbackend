import { express } from "express";
import cors from 'cors';
import cookiesParser from 'cookie-parser'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}))
// Setting 
// app.use is for middleware and json files in server and url 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookiesParser())



export {app}