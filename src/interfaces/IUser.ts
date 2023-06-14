import { IAuth } from "./IAuth";

export interface IUser extends IAuth {
    name: string;
    lastName: string;
    role: string;
}