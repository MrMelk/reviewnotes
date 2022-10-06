import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { getReviewNotes, getUsers } from "./Controllers/getAPIs"

dotenv.config();

const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});


app.listen(5000, async () => {
    console.log(`listening at http:localhost:5000`);
    
    return "done";
})

app.get("/reviewnotes/", getReviewNotes);

app.get("/users/", getUsers);