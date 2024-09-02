const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser"); 

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

const port = 4200;

const Routes = require("./controller/EmployeeRoutes");

// Database connection...
const uri =
  "mongodb+srv://CompanY:CompanY@cluster0.eawy3.mongodb.net/EmloyeeDetails";
mongoose
  .connect(uri)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Error", err));

// Form API...
app.get("/", (req, res) => {
  res.send("hello express is running");
});

app.use("/", Routes);

// Listening to the port...
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
