import { GetUserDTO } from "../../dto/getUserDTO";
import { CreateUserDTO } from "../../dto/createUserDTO";
import { UserRepositoryParams } from "../../types/user/repository";
import { UserRepositoryBase } from "../../featureBases/user/repository";

export default class UserService {
    private repository: UserRepositoryBase;

    constructor(repositoryBase: UserRepositoryBase) {
        this.repository = repositoryBase;
    }

    async getUser(uid: string) {
        const param: UserRepositoryParams = { uid: { uid: uid } };
        const user = await this.repository.get(param);

        if(user != null) {
            const result = GetUserDTO.fromEntity(user);
            return result;
        }

        return null;
    }

    async createUser(user: CreateUserDTO): Promise<string> {
        try {
            const userEntity = user.toEntity();
            const uid = await this.repository.create(userEntity);

            return uid;
        } catch(error) {
            throw error;
        }
    }
}