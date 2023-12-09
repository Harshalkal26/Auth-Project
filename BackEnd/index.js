const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//middlewares
app.use(cors());
app.use(express.json());
require("dotenv").config();

try {
  mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DatabBase Connected Syccessfully");
  app.listen(process.env.PORT, () => {
    console.log("Server is runnig on port 8080");
  });
} catch (error) {
  console.log(error);
}
//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
