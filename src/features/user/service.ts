import UserRepository from "./repository";
import { GetUserDTO } from "../../dto/getUserDTO";

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
}