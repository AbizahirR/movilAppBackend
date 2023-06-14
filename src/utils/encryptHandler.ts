import { hash, compare } from "bcrypt";

const encryptPassword = async (password: string) => {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
}

const comparePassword = async (password: string, hashedPassword: string) => {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
}

export { encryptPassword, comparePassword }