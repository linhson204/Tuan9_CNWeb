const StudentModel = require("../models/Student");

exports.getAllStudents = async () => {
  return await StudentModel.find();
};

exports.createStudent = async (student) => {
  const Student = new Schema();
  return await StudentModel.create(student);
};

exports.getStudentById = async (id) => {
  return await StudentModel.findById(id);
};

exports.updateStudent = async (id, student) => {
  return await StudentModel.findByIdAndUpdate(id, student);
};

exports.deleteStudent = async (id) => {
  return await StudentModel.findByIdAndDelete(id);
};

exports.getStudentByName = async (name) => {
  return await StudentModel.find({
    name: { $regex: name, $options: "i" },
  });
};

exports.getStudentByAddress = async (address) => {
  return await StudentModel.find({
    address: { $regex: address, $options: "i" },
  });
};
