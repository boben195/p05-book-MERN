import express from "express"
import { deleteReservation, getAllReservation, createReservation } from "../controllers/reservContollers.js"
const router = express.Router();

router.post("/create", createReservation)
router.get("/get", getAllReservation)
router.delete("/delete/:id", deleteReservation)

export default router