import { AppDataSource } from "../../configs/orm";
import { User } from "../../entities/user/user";

export default class UserRepository {
    async getUser(uid: string): Promise<User | null> {
        const builder = AppDataSource.manager.createQueryBuilder(User, "user");
        const result = await builder
            .addSelect("user.uid, user.name, user.level")
            .leftJoinAndSelect("user.links", "links")
            .where("user.uid = :uid", { uid: uid })
            .getOne();
        return result;
    }

    async createUser(user: User): Promise<void> {
        const builder = AppDataSource.manager.createQueryBuilder(User, "user");

        const result = await builder
            .insert()
            .into(User, ["name", "level"])
            .values(user)
            .execute();

        if(result.raw === 0) {
            throw new Error("Failed to create user");
        }
    }
}