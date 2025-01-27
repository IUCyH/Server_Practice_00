import express from "express";
import UserController from "./controller";
import UserService from "./service";
import UserRepository from "./repository";

const router = express.Router();

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

router.get("/:id", controller.getUser);
router.post("/", controller.createUser);

export default router;