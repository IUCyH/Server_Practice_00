import {
    Entity,
    OneToMany
} from "typeorm";
import { UserLink } from "./userLink";

@Entity()
export class User {
    id: number = 0;
    uid: string = "";
    name: string = "";
    level: number = 0;

    @OneToMany(() => UserLink, link => link.user)
    links!: UserLink[];
}