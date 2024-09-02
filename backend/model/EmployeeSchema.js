const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema(
  {
    employeeId: { type: Number },
    firstname: { type: String },
    lastname: { type: String},
    email: { type: String},
    phone: { type: String}, 
    city: { type: String},
  },
  {
    collection: "Employee",
  }
);

module.exports = mongoose.model("Employee",EmployeeSchema);