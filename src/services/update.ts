import { IDoctorUpdate } from "../interfaces/IDoctorUpdate";
import { IUserUpdate } from "../interfaces/IUserUpdate";
import DoctorModel from "../models/Doctor";
import UserModel from "../models/User";
import { comparePassword, encryptPassword } from "../utils/encryptHandler";

const updateU = async (data: IUserUpdate) => {
    const { lastPassword, password, _id, email, modifiedMail, modifiedPassword } = data;

    if (!modifiedMail && !modifiedPassword) return { error: "NO_CHANGES" };

    let existsUserId = await UserModel.exists({ _id: _id });

    if (!existsUserId) return { error: "INVALID_USER" };

    let existUser = await UserModel.findOne({ _id: _id });

    if (!existUser) return { error: "WRONG_USER" };

    const isMatch = await comparePassword(lastPassword, existUser.password);
    
    if (!isMatch) return { error: "WRONG_PASSWORD" };

    if (modifiedMail && !modifiedPassword) {
        
        let existsUserMail = await UserModel.exists({ email: email });
        let existsDoctorMail = await DoctorModel.exists({ email: email });

        if (email === existUser.email) return { error: "SAME_EMAIL" };

        if (existsUserMail || existsDoctorMail) return { error: "EMAIL_EXISTS" };        

        const updatedUser = await UserModel.updateOne({ _id: _id }, { email: email });
        
        if (updatedUser.modifiedCount === 1) {
            return { message: "USER_UPDATED" };
        } else {
            return { error: "ERROR_UPDATE_USER" };
        }
    } else if (!modifiedMail && modifiedPassword) {
        const hashedPassword = await encryptPassword(password);

        const updatedUser = await UserModel.updateOne({ _id: _id }, { password: hashedPassword });

        if (updatedUser.modifiedCount === 1) {
            return { message: "USER_UPDATED" };
        } else {
            return { error: "ERROR_UPDATE_USER" };
        }
    } else if (modifiedMail && modifiedPassword) {

        let existsUserMail = await UserModel.exists({ email: email });
        let existsDoctorMail = await DoctorModel.exists({ email: email });
        
        if (email === existUser.email) return { error: "SAME_EMAIL" };
        if (password === existUser.password) return { error: "SAME_PASSWORD" };

        if (existsUserMail || existsDoctorMail) return { error: "EMAIL_EXISTS" };

        const hashedPassword = await encryptPassword(password);

        const updatedUser = await UserModel.updateOne({ _id: _id }, { password: hashedPassword, email: email });

        if (updatedUser.modifiedCount === 1) {
            return { message: "USER_UPDATED" };
        } else {
            return { error: "ERROR_UPDATE_USER" };
        }
    }
};

const updateD = async(data: IDoctorUpdate) => {
    const { lastPassword, password, _id, email, modifiedMail, modifiedPassword } = data;

    if (!modifiedMail && !modifiedPassword) return { error: "NO_CHANGES" };

    let existsDoctorId = await DoctorModel.exists({ _id: _id });

    if (!existsDoctorId) return { error: "INVALID_DOCTOR" };

    let existDoctor = await DoctorModel.findOne({ _id: _id });

    if (!existDoctor) return { error: "WRONG_DOCTOR" };

    const isMatch = await comparePassword(lastPassword, existDoctor.password);

    if (!isMatch) return { error: "WRONG_PASSWORD" };

    if (modifiedMail && !modifiedPassword) {
        
        let existsUserMail = await UserModel.exists({ email: email });
        let existsDoctorMail = await DoctorModel.exists({ email: email });

        if (email === existDoctor.email) return { error: "SAME_EMAIL" };

        if (existsUserMail || existsDoctorMail) return { error: "EMAIL_EXISTS" };

        const updateDoctor = await DoctorModel.updateOne({ _id: _id }, { email: email });

        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        } else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    } else if (!modifiedMail && modifiedPassword) {
        const hashedPassword = await encryptPassword(password);

        const updateDoctor = await DoctorModel.updateOne({ _id: _id }, { password: hashedPassword });

        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        } else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    } else if (modifiedMail && modifiedPassword) {

        let existsUserMail = await UserModel.exists({ email: email });
        let existsDoctorMail = await DoctorModel.exists({ email: email });

        if (email === existDoctor.email) return { error: "SAME_EMAIL" };
        if (password === existDoctor.password) return { error: "SAME_PASSWORD" };

        if (existsUserMail || existsDoctorMail) return { error: "EMAIL_EXISTS" };

        const hashedPassword = await encryptPassword(password);

        const updateDoctor = await DoctorModel.updateOne({ _id: _id }, { password: hashedPassword, email: email });

        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        } else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    }
};

export { updateU, updateD };