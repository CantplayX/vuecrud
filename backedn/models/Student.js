const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  ID: Number,
  name: String,
  course: String,
  email: String,
  phone: String,
  createdAt: Date,
  action: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
