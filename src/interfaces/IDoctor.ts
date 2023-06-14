import { IAuth } from "./IAuth";

export interface IDoctor extends IAuth {
    name: string;
    lastName: string;
    specialty: string;
    role: string;
    summary: string;
}