import { IRequestUser } from "../interfaces/IRequestUser";
import { getAllDoctors } from "../services/doctors";
import { checkLogin } from "../services/login";
import { handleHTTP } from "../utils/errorHandler"
import { Request, Response } from 'express';

const getDoctors = async (req: IRequestUser, res: Response) => {
    try {
        const doctors = await getAllDoctors();
        console.log(doctors);
        
        res.send({ data: doctors, user: req.user });
    } catch (error: any) {
        handleHTTP(res, "ERROR_DOCTORS_ROUTE");
    }
}

export { getDoctors }