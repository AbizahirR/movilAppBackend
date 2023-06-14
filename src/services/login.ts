import { IAuth } from '../interfaces/IAuth';
import DoctorModel from '../models/Doctor';
import UserModel from "../models/User";
import { comparePassword } from '../utils/encryptHandler';
import { signToken } from '../utils/jwtHandler';

const checkLogin = async (user: IAuth) => {
    const { email, password } = user;
    
    let existUser = await UserModel.findOne({ email: email });
        
    if (!existUser) {
        existUser = await DoctorModel.findOne({ email: email });

        if (!existUser) return { error: "WRONG_EMAIL" };
    };
    
    const isMatch = await comparePassword(password, existUser.password);

    if (!isMatch) return { error: "WRONG_PASSWORD" };

    const token = await signToken(existUser._id, existUser.name, existUser.lastName, existUser.role, existUser.email);

    const filteredUserData = {
        _id: existUser._id,
        name: existUser.name,
        lastName: existUser.lastName,
        email: existUser.email,
        role: existUser.role,
        token: token
    }
    
    return filteredUserData;
};

export { checkLogin };