import { Router } from "express";
import { listCourse, saveCourse, deleteCourse } from "./controllers/course";
import { listStudent, saveStudent, deleteStudent } from "./controllers/student";
import { listTeacher, saveTeacher, deleteTeacher } from "./controllers/teacher";
import { listSubject, saveSubject, deleteSubject } from "./controllers/subject";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse);
router.delete("/courses/:id", deleteCourse);

router.get("/students", listStudent);
router.post("/students", saveStudent);
router.delete("/students/:id", deleteStudent);

router.get("/teachers", listTeacher);
router.post("/teachers", saveTeacher);
router.delete("/teachers/:id", deleteTeacher)

router.get("/subjects", listSubject);
router.post("/subjects", saveSubject);
router.delete("/subjects/:id", deleteSubject)

export { router };
