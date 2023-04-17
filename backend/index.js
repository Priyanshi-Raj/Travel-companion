import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./routes/route.js";
const app = express();

dotenv.config();
const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
connection(USERNAME, PASSWORD);

app.use();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/", Router);
app.listen(PORT, () =>
  console.log(`server is running successfully on PORT ${PORT}`)
);
