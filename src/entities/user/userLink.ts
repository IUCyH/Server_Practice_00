import {
    Entity,
    ManyToOne
} from "typeorm";
import { User } from "./user";

@Entity()
export class UserLink {
    userId: number = 0;
    link: string = "";

    @ManyToOne(() => User, user => user.links, {
        cascade: true
    })
    user!: User;
}