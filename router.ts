import { Router } from "express";
import { listCourse, saveCourse, deleteCourse } from "./controllers/course";
import { listStudent, saveStudent, deleteStudent } from "./controllers/student";
import { listTeacher, saveTeacher, deleteTeacher } from "./controllers/teacher";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse);
router.delete("/courses/:id", deleteCourse);

router.get("/students", listStudent);
router.post("/students", saveStudent);
router.delete("/students/:id", deleteStudent);

router.get("/students", listTeacher);
router.post("/students", saveTeacher);
router.delete("/students/:id", deleteTeacher)

export { router };
