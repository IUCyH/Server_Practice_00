import express from "express";
import UserController from "./controller";

const router = express.Router();
const controller = new UserController();

router.get("/:id", controller.getUser);
router.post("/", controller.createUser);

export default router;