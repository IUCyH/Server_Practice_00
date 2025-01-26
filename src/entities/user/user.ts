import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { UserLink } from "./userLink";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", { length: 32 })
    uid: string = "";

    @Column("varchar", { length: 10 })
    name: string = "";

    @Column("int")
    level: number = 0;

    @OneToMany(() => UserLink, link => link.user)
    links!: UserLink[];
}