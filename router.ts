import { Router } from "express";
import { listCourse, saveCourse, deleteCourses } from "./controllers/course";
import { listStudent, saveStudent, deleteStudents } from "./controllers/student";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse);
router.delete("/courses", deleteCourses);

router.get("/students", listStudent);
router.post("/students", saveStudent);
router.delete("/students/:id", deleteStudents)

export { router };
