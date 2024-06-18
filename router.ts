import { Router } from "express";
import { listCourse, saveCourse, deleteCourse } from "./controllers/course";
import { listStudent, saveStudent, deleteStudent } from "./controllers/student";
import { listTeacher, saveTeacher, deleteTeacher } from "./controllers/teacher";
import { listSubject, saveSubject, deleteSubject } from "./controllers/subject";
import { listProduct, saveProduct, deleteProduct } from "./controllers/product";
import { listCar, saveCar, deleteCar } from "./controllers/car";
import { listDriver, saveDriver, deleteDriver } from "./controllers/driver";
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

router.get("/products", listProduct);
router.post("/products", saveProduct);
router.delete("/products/:id", deleteProduct)

router.get("/cars", listCar);
router.post("/cars", saveCar);
router.delete("/cars/:id", deleteCar)

router.get("/drivers", listDriver);
router.post("/drivers", saveDriver);
router.delete("/drivers/:id", deleteDriver)

export { router };
