import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import postsRoute from "./routes/postsRoute.js";

// import .env variables
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

//overwrite original error handler
app.use(errorHandler);

app.use("/api/posts", postsRoute);

// encoders to accept differant requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect to DB then runn the server
connectDB()
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((err) => {
    console.log(err.message);
  });
