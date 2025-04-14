const studentService = require("../services/StudentService");
const StudentSchema = require("../models/Student.js");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ data: students, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ data: student, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ data: student, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (student == null) {
      res.status(404).json({
        message: `Không tìm thấy sinh viên có mã id ${req.params.id}`,
        status: "error",
      });
    } else {
      res.json({ data: student, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: `id sinh viên không hợp lệ` });
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    const student = await studentService.deleteStudent(req.params.id, req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (student == null) {
      res.status(404).json({
        message: `Không tìm thấy sinh viên có mã id ${req.params.id}`,
        status: "error",
      });
    } else {
      res.json({ data: student, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: `id sinh viên không hợp lệ` });
  }
};

exports.getStudentByName = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const student = await studentService.getStudentByName(name);

    if (!student || student.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json({ data: student, status: "success" });
  } catch (err) {
    console.error("Error fetching student by name:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getStudentByAddress = async (req, res) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    const student = await studentService.getStudentByAddress(address);

    if (!student || student.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json({ data: student, status: "success" });
  } catch (err) {
    console.error("Error fetching student by address:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
