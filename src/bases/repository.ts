import { ObjectLiteral } from "typeorm";
import { UserRepositoryParams } from "../types/user/repository";

export const Features = {
    User: "User"
} as const;

export type RepositoryParams = {
    [Features.User]: UserRepositoryParams;
};

export interface Repository<E, T extends keyof (typeof Features)> {
    get(param: RepositoryParams[T]): Promise<null | ObjectLiteral>;
    create(entity: E): Promise<any>;
}