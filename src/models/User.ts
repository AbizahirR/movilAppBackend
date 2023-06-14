import { Schema, model, Types, Model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'doctor'],
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;