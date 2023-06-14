"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DoctorSchema = new mongoose_1.Schema({
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
const DoctorModel = (0, mongoose_1.model)('Doctor', DoctorSchema);
exports.default = DoctorModel;
