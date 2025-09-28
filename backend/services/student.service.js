import Student from "../models/student.model.js";

export const addStudent = async(studentData)=>{
      if (!studentData.roll_no || !studentData.name) {
            throw new Error("Roll number and name are required");
        }

    const existingStudent = await Student.findOne({ roll_no: studentData.roll_no });
        if (existingStudent) {
            throw new Error("Student with this roll number already exists");
        }

    const student = await Student.create(studentData);
    return student;
}