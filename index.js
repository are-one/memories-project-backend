import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

//regis to server and add prefix for routes post

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.API_URL;

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(CONNECTION_URL);

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}
// https://www.mongodb.com/cloud/atlas
