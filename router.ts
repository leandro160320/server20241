import { Router } from "express";

import { listCar, saveCar, deleteCar } from "./controllers/car";
import { listDriver, saveDriver, deleteDriver } from "./controllers/driver";
const router = Router();


router.get("/cars", listCar);
router.post("/cars", saveCar);
router.delete("/cars/:id", deleteCar)

router.get("/drivers", listDriver);
router.post("/drivers", saveDriver);
router.delete("/drivers/:id", deleteDriver)

export { router };
