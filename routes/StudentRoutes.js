const express = require("express");
const {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
  getStudentByName,
  getStudentByAddress,
} = require("../controllers/StudentController");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router
  .route("/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);
router.route("/getUserName").post(getStudentByName);
router.route("/getUserAddress").post(getStudentByAddress);

module.exports = router;
