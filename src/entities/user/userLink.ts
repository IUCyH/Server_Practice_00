import {
    Entity,
    PrimaryColumn,
    ManyToOne
} from "typeorm";
import { User } from "./user";

@Entity()
export class UserLink {
    @PrimaryColumn("int")
    userId: number = 0;

    @PrimaryColumn("varchar", { length: 128 })
    link: string = "";

    @ManyToOne(() => User, user => user.links, {
        cascade: true
    })
    user!: User;
}