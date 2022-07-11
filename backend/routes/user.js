import express from "express";
import { getAllUser, signup } from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
export default router;
