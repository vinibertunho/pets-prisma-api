import { Router } from "express";
import * as petsController from "../controllers/petsControllers.js";

const router = Router();

router.get("/", petsController.getAllPets);
router.get("/:id", petsController.getPetById);

export default router;