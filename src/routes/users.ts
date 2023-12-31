import { Router } from "express";
import { login, register } from "../controllers/user";

const router = Router();

// router.get("/", getUsers);
router.post("/", register);
router.post("/login", login);

export default router;
