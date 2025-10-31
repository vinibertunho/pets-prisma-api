import { Router } from "express";
import * as petsController from "../controllers/petsControllers.js";

const router = Router();

router.get("/", petsController.getAllPets);
router.get("/:id", petsController.getPetById);
router.get("/", petsController.createPet);
router.get("/:id", petsController.updatePet);
router.get("/:", petsController.deletePet);
export default router;
