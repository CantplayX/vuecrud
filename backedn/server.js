const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://ayorbami17:student123@students.vao0r.mongodb.net/students?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Student Schema and Model
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

// CRUD Routes

// Get all students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
// get student by id
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ ID: req.params.id }); // Use `_id` if using default MongoDB ObjectId
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a student
app.post("/students", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
});

// Update a student
app.put("/students/:id", async (req, res) => {
  const updatedStudent = await Student.findOneAndUpdate(
    { ID: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updatedStudent);
});

// Delete a student
app.delete("/students/:id", async (req, res) => {
  await Student.findOneAndDelete({ ID: req.params.id });
  res.json({ message: "Student deleted" });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
