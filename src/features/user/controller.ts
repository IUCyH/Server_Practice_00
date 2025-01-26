import { Request, Response } from "express";
import UserService from "./service";

export default class UserController {
    private service: UserService = new UserService();

    async getUser(req: Request, res: Response) {
        const uid = req.params.id;
        if(!uid) {
            res.status(400).json({ message: "Required parameter not found" });
        }

        const user = await this.service.getUser(uid);
        if(user == null) {
            res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    }
}