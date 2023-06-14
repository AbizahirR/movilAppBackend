import { IAuth } from "./IAuth";

export interface IDoctorUpdate extends IAuth {
    _id: string;
    lastPassword: string;
    modifiedMail: boolean;
    modifiedPassword: boolean;
}