const express = require("express");

const connectDB = require("./config/db");
require("dotenv").config();
const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(process.env.PORT, console.log("Server running..."));
