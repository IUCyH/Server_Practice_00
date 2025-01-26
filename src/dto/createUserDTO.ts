import { User } from "../entities/user/user";

export class CreateUserDTO {
    name: string;
    level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }

    toEntity(): User {
        const user = new User();
        user.name = this.name;
        user.level = this.level;

        return user;
    }
}