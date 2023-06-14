import { IDoctor } from "../interfaces/IDoctor";
import { IUser } from "../interfaces/IUser";
import DoctorModel from "../models/Doctor";
import UserModel from "../models/User";
import { encryptPassword } from "../utils/encryptHandler";

const registerUser = async (user: IUser | IDoctor) => {    

    const requiredFields = ['name', 'lastName', 'email', 'password', 'role'];
    const isMissingFields = requiredFields.some(field => !(field in user));

    if (isMissingFields) return { error: "MISSING_DATA" };

    const userExists = await UserModel.exists({ email: user.email });

    if (userExists) {
        return { error: "USER_EXISTS" };
    }

    const doctorExists = await DoctorModel.exists({ email: user.email });

    if (doctorExists) {
        return { error: "DOCTOR_EXISTS" };
    }

    if (user.role === 'user') {
        

        const hashedPassword = await encryptPassword(user.password);

        const userData: IUser = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
            role: user.role
        }
        
        const newUser = await UserModel.create(userData);
        return newUser;

    } else if (user.role === 'doctor') {        

        const hashedPassword = await encryptPassword(user.password);

        const doctorData: IDoctor = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
            role: user.role,
            specialty: '',
            summary: 'Sin experiencia'
        }

        if ("specialty" in user) {
            doctorData.specialty = user.specialty;
            doctorData.summary = user.summary;
        }
        
        const newDoctor = await DoctorModel.create(doctorData);
        return newDoctor;
    }

    return { error: "INVALID_ROLE" };
}

export { registerUser };