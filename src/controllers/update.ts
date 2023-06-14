import { Request, Response } from 'express';
import { handleHTTP } from '../utils/errorHandler';
import { updateD, updateU } from '../services/update';

const updateUser = async (req: Request, res: Response) => {
    try {
        const userData = await updateU(req.body);
        res.send(userData);
    }
    catch (error) {
        handleHTTP(res, "ERROR_UPDATE_USER");
    }
};

const updateDoctor = async (req: Request, res: Response) => {
    try {
        const doctorData = await updateD(req.body);
        res.send(doctorData);
    }
    catch (error) {
        handleHTTP(res, "ERROR_UPDATE_DOCTOR");
    }
};

export { updateUser, updateDoctor };