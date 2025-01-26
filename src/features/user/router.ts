import express from "express";
import UserController from "./controller";

const router = express.Router();
const controller = new UserController();

router.get("/:id", controller.getUser);

export default router;