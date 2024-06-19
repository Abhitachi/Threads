import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDB.js";
import postRoutes from './routes/postRoutes.js';
import userRoutes from "./routes/userRoute.js";

dotenv.config();
connectDB();

console.log("here");
const app = express();

const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use('/api/posts', postRoutes);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log("running api", `${PORT}`);
});
