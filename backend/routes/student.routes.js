import {Router} from "express";
import {body} from "express-validator";
import * as studentController from "../controllers/student.controller.js"

const router = Router();

router.post("/add", 
        body("roll_no")
        .isInt().withMessage("Roll number must be an integer")
        .isLength({ min: 5, max: 5 }).withMessage("Roll number must be exactly 5 digits"),
        body("name").notEmpty().withMessage("Name is required"),
        body("mobile_no")
        .isInt().withMessage("Mobile number must be digits only")
        .isLength({ min: 10, max: 10 }).withMessage("Mobile number must be exactly 10 digits"),
        body("hostel_name")
        .isIn(["Bhutagni", "Chitaghni", "Jathragni"]).withMessage("Invalid hostel name"),
        body("Room_no").isInt().withMessage("Room number must be an integer"),
        body("email").optional().isEmail().withMessage("Invalid email format"),

    studentController.addStudentController
)

export default router;