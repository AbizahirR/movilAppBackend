import { handleHTTP } from "../utils/errorHandler"
import { registerUser } from "../services/register";
import { Request, Response } from 'express';

const registerNewUser = async (req: Request, res: Response) => {
    try {
        const newUserData = await registerUser(req.body);
        res.send(newUserData);
    } catch (error: any) {
        handleHTTP(res, "ERROR_REGISTER_NEW_USER");
    }
}

export { registerNewUser };