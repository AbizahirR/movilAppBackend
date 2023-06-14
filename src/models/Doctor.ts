import { Schema, model } from 'mongoose';

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        enum: ["Geriatría"],
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
    },
    summary: {
        type: String,
        default: "Sin experiencia"
    }
}, {
    timestamps: true,
    versionKey: false
});

const DoctorModel = model('Doctor', DoctorSchema);

export default DoctorModel;
