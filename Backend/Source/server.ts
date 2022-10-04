import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { getReviewNotes, getUsers } from "./Controllers/getAPIs"

dotenv.config();

const app = express();
const  corsOption = {
    origin: ["http://localhost:3000"]
};

app.listen(process.env.SERVER_PORT, async () => {
    console.log(`listening at http:localhost:${process.env.SERVER_PORT}`);
    
    return "done";
})

app.get("/reviewnotes/", getReviewNotes);

app.get("/users/", getUsers);