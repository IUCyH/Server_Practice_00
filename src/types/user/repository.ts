export type uid = { uid: string };
export type idPassword = { id: number, password: string };

export interface UserRepositoryParams {
    uid?: uid;
    idPassword?: idPassword;
}