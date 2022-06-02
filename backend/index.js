import express from "express";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import postsRoute from "./routes/postsRoute.js";

// import .env variables
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
// encoders to accept differant requests
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use("/api/posts", postsRoute);

//overwrite original error handler
app.use(errorHandler);

// connect to DB then runn the server
connectDB()
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((err) => {
    console.log(err.message);
  });
