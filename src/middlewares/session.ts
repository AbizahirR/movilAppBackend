import { Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwtHandler';
import { IRequestUser } from '../interfaces/IRequestUser';

const checkJWT = async (req: IRequestUser, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ").pop() || null;
        if (!token) return res.status(400).send({ error: "INVALID_SESSION" });

        const isValidUser = await verifyToken(token);
        if (!isValidUser) return res.status(400).send({ error: "INVALID_SESSION" });

        req.user = isValidUser;
        next();
    } catch (error: any) {
        console.log(error);
        
        return res.status(400).send({ error: error.message });
    }
}

export { checkJWT }