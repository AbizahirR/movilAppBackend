"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const Doctor_1 = __importDefault(require("../models/Doctor"));
const User_1 = __importDefault(require("../models/User"));
const encryptHandler_1 = require("../utils/encryptHandler");
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const requiredFields = ['name', 'lastName', 'email', 'password', 'role'];
    const isMissingFields = requiredFields.some(field => !(field in user));
    if (isMissingFields)
        return { error: "MISSING_DATA" };
    const userExists = yield User_1.default.exists({ email: user.email });
    if (userExists) {
        return { error: "USER_EXISTS" };
    }
    const doctorExists = yield Doctor_1.default.exists({ email: user.email });
    if (doctorExists) {
        return { error: "DOCTOR_EXISTS" };
    }
    if (user.role === 'user') {
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(user.password);
        const userData = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
            role: user.role
        };
        const newUser = yield User_1.default.create(userData);
        return newUser;
    }
    else if (user.role === 'doctor') {
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(user.password);
        const doctorData = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
            role: user.role,
            specialty: '',
            summary: 'Sin experiencia'
        };
        if ("specialty" in user) {
            doctorData.specialty = user.specialty;
            doctorData.summary = user.summary;
        }
        const newDoctor = yield Doctor_1.default.create(doctorData);
        return newDoctor;
    }
    return { error: "INVALID_ROLE" };
});
exports.registerUser = registerUser;
