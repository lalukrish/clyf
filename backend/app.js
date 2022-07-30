import express from "express";
const app = express();
import mongoose from "mongoose";
import blogRouter from "./routes/blog-router";
import router from "./routes/user";
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://user_user-_123:user_user-_123@cluster0.aqzbj.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected to the database and port5000"))
  .catch((err) => console.log(err));
