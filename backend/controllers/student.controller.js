import * as studentService from "../services/student.service.js";

import { validationResult } from "express-validator";


export const addStudentController = async (req, res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const student = await studentService.addStudent(req.body);
        res.status(201).json({ student});
    }
    catch(err){
        res.status(400).json(err.message);
    }
}