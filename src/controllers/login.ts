import { checkLogin } from "../services/login";
import { handleHTTP } from "../utils/errorHandler"
import { Request, Response } from 'express';

const verifyLogin = async (req: Request, res: Response) => {
    try {      
        const userData = await checkLogin(req.body);       
        
        res.send(userData);
    } catch (error: any) {
        handleHTTP(res, "ERROR_VEIRIFY_LOGIN");
    }
}

export { verifyLogin }