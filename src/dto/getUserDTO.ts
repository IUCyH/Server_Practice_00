import { User } from "../entities/user/user";

export class GetUserDTO {
    uid: string;
    name: string;
    level: number;
    links: string[];

    private constructor(uid: string, name: string, level: number, links: string[]) {
        this.uid = uid;
        this.name = name;
        this.level = level;
        this.links = links;
    }

    static fromEntity(entity: User) {
        return new GetUserDTO(entity.uid, entity.name, entity.level, entity.links.map(link => link.link));
    }
}