const Router=require('express');
const { deleteStudent, updateBalance, getAllstudents, getOneStudent, createStudent } = require('../Controllers/studentController');
const studentRoute=Router()

studentRoute.post("/", createStudent);
studentRoute.get("/:studentId", getOneStudent);
studentRoute.get("/",getAllstudents);
studentRoute.put("/:studentId",updateBalance);
studentRoute.delete("/:studentId", deleteStudent);

module.exports = {
    studentRoute,
};