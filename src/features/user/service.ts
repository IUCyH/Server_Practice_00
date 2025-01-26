import UserRepository from "./repository";
import { GetUserDTO } from "../../dto/getUserDTO";
import { CreateUserDTO } from "../../dto/createUserDTO";

export default class UserService {
    private repository: UserRepository = new UserRepository();

    async getUser(uid: string) {
        const user = await this.repository.getUser(uid);

        if(user != null) {
            const result = GetUserDTO.fromEntity(user);
            return result;
        }

        return null;
    }

    async createUser(user: CreateUserDTO): Promise<string> {
        try {
            const userEntity = user.toEntity();
            const uid = await this.repository.createUser(userEntity);

            return uid;
        } catch(error) {
            throw error;
        }
    }
}