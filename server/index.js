import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

import postRoutes from "./routes/post.js";
import { createPost } from "./controllers/posts.js";

app.use("/posts", postRoutes);
app.use("/posts", createPost);

//connecting mongodb cloud
const MONGO_URL =
  "mongodb+srv://sathya06:sathya06@cluster0.cunjy.mongodb.net/memories-app?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`))) //its is an promice .then acepts callback
  .catch((err) => console.log(err.message));
