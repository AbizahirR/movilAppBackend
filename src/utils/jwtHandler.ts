import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "DEFAULTJWTTOKEN.SECRET";

const signToken = async (userId: object, name: string, lastName: string, role: string, email: string) => {
    const jwt = sign({userId, name, lastName, role, email}, JWT_SECRET, { expiresIn: '1h' });
    return jwt;
}

const verifyToken = async (jwt: string) => {
    const validToken = verify(jwt, JWT_SECRET);

    return validToken;
}

export { signToken, verifyToken }