import { Request, Response } from "express";
import { autoBind } from "../../utils/autoBind";
import UserService from "./service";
import { CreateUserDTO } from "../../dto/createUserDTO";

export default class UserController {
    private service: UserService = new UserService();

    constructor() {
        autoBind(this);
    }

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

    async createUser(req: Request, res: Response) {
        const { name, level } = req.body;
        if(!name || !level) {
            res.status(400).json({ message: "Required parameter not found" });
            return;
        }

        try {
            const userDTO = new CreateUserDTO(name, level);
            const uid = await this.service.createUser(userDTO);

            res.status(201).json({ message: "User created", uid: uid });
        } catch(error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}