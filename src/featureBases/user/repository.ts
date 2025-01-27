import { Repository } from "../../bases/repository";
import { uid, UserRepositoryParams } from "../../types/user/repository";
import { User } from "../../entities/user/user";

export abstract class UserRepositoryBase implements Repository<"User"> {
    protected abstract getUser(param: uid): Promise<User | null>;

    async get(param: UserRepositoryParams): Promise<null | User> {
        if(param.uid) {
            return await this.getUser(param.uid);
        }

        throw new Error("Invalid param");
    }
}