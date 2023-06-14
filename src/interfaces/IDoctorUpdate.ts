import { IAuth } from "./IAuth";

export interface IDoctorUpdate extends IAuth {
    _id: string;
    lastPassword: string;
    summary: string;
    modifiedMail: boolean;
    modifiedPassword: boolean;
    modifiedSummary: boolean;
}