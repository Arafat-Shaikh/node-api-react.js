require("dotenv").config();
const express = require("express");
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, process.env.DIR_PUBLIC)));
app.use("/users", userRouter.router);
app.use("/products", productRouter.router);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("server has started");
});
