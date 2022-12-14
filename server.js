/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This is the main entry point into our server. We will be employing a Controller-DAO
 * design pattern to handle requests from the client to interact with the server
 */

//General Libraries & Requirements
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());

//Controllers
import AuthenticationController from "./controllers/AuthenticationController.js";

//SESSION MANAGEMENT
import session from "express-session";

app.use(cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
}));

//Options for our Session
const sess = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
    }
}

//Secure Cookies only work with HTTPS
if (process.env.ENV === "PRODUCTION") {
    app.set('trust proxy', 1)
    sess.cookie.secure = true,
        sess.cookie.httpOnly = false,
        Object.assign(sess.cookie, { sameSite: "none" });
}

app.use(session(sess))


//MONGO DATABASE
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.w5c0s1k.mongodb.net/mixologist?retryWrites=true&w=majority`);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);

