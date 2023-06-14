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
exports.updateD = exports.updateU = void 0;
const Doctor_1 = __importDefault(require("../models/Doctor"));
const User_1 = __importDefault(require("../models/User"));
const encryptHandler_1 = require("../utils/encryptHandler");
const updateU = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { lastPassword, password, _id, email, modifiedMail, modifiedPassword } = data;
    if (!modifiedMail && !modifiedPassword)
        return { error: "NO_CHANGES" };
    let existsUserId = yield User_1.default.exists({ _id: _id });
    if (!existsUserId)
        return { error: "INVALID_USER" };
    let existUser = yield User_1.default.findOne({ _id: _id });
    if (!existUser)
        return { error: "WRONG_USER" };
    const isMatch = yield (0, encryptHandler_1.comparePassword)(lastPassword, existUser.password);
    if (!isMatch)
        return { error: "WRONG_PASSWORD" };
    if (modifiedMail && !modifiedPassword) {
        let existsUserMail = yield User_1.default.exists({ email: email });
        let existsDoctorMail = yield Doctor_1.default.exists({ email: email });
        if (email === existUser.email)
            return { error: "SAME_EMAIL" };
        if (existsUserMail || existsDoctorMail)
            return { error: "EMAIL_EXISTS" };
        const updatedUser = yield User_1.default.updateOne({ _id: _id }, { email: email });
        if (updatedUser.modifiedCount === 1) {
            return { message: "USER_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_USER" };
        }
    }
    else if (!modifiedMail && modifiedPassword) {
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(password);
        const updatedUser = yield User_1.default.updateOne({ _id: _id }, { password: hashedPassword });
        if (updatedUser.modifiedCount === 1) {
            return { message: "USER_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_USER" };
        }
    }
    else if (modifiedMail && modifiedPassword) {
        let existsUserMail = yield User_1.default.exists({ email: email });
        let existsDoctorMail = yield Doctor_1.default.exists({ email: email });
        if (email === existUser.email)
            return { error: "SAME_EMAIL" };
        if (password === existUser.password)
            return { error: "SAME_PASSWORD" };
        if (existsUserMail || existsDoctorMail)
            return { error: "EMAIL_EXISTS" };
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(password);
        const updatedUser = yield User_1.default.updateOne({ _id: _id }, { password: hashedPassword, email: email });
        if (updatedUser.modifiedCount === 1) {
            return { message: "USER_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_USER" };
        }
    }
});
exports.updateU = updateU;
const updateD = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { lastPassword, password, _id, email, summary, modifiedMail, modifiedPassword, modifiedSummary } = data;
    if (!modifiedMail && !modifiedPassword && !modifiedSummary)
        return { error: "NO_CHANGES" };
    let existsDoctorId = yield Doctor_1.default.exists({ _id: _id });
    if (!existsDoctorId)
        return { error: "INVALID_DOCTOR" };
    let existDoctor = yield Doctor_1.default.findOne({ _id: _id });
    if (!existDoctor)
        return { error: "WRONG_DOCTOR" };
    const isMatch = yield (0, encryptHandler_1.comparePassword)(lastPassword, existDoctor.password);
    if (!isMatch)
        return { error: "WRONG_PASSWORD" };
    if (modifiedMail && !modifiedPassword && !modifiedSummary) {
        let existsUserMail = yield User_1.default.exists({ email: email });
        let existsDoctorMail = yield Doctor_1.default.exists({ email: email });
        if (email === existDoctor.email)
            return { error: "SAME_EMAIL" };
        if (existsUserMail || existsDoctorMail)
            return { error: "EMAIL_EXISTS" };
        const updateDoctor = yield Doctor_1.default.updateOne({ _id: _id }, { email: email });
        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    }
    else if (!modifiedMail && modifiedPassword && !modifiedSummary) {
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(password);
        const updateDoctor = yield Doctor_1.default.updateOne({ _id: _id }, { password: hashedPassword });
        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    }
    else if (modifiedMail && modifiedPassword && !modifiedSummary) {
        let existsUserMail = yield User_1.default.exists({ email: email });
        let existsDoctorMail = yield Doctor_1.default.exists({ email: email });
        if (email === existDoctor.email)
            return { error: "SAME_EMAIL" };
        if (password === existDoctor.password)
            return { error: "SAME_PASSWORD" };
        if (existsUserMail || existsDoctorMail)
            return { error: "EMAIL_EXISTS" };
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(password);
        const updateDoctor = yield Doctor_1.default.updateOne({ _id: _id }, { password: hashedPassword, email: email });
        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    }
    else if (modifiedMail && modifiedPassword && modifiedSummary) {
        let existsUserMail = yield User_1.default.exists({ email: email });
        let existsDoctorMail = yield Doctor_1.default.exists({ email: email });
        if (email === existDoctor.email)
            return { error: "SAME_EMAIL" };
        if (password === existDoctor.password)
            return { error: "SAME_PASSWORD" };
        if (existsUserMail || existsDoctorMail)
            return { error: "EMAIL_EXISTS" };
        const hashedPassword = yield (0, encryptHandler_1.encryptPassword)(password);
        const updateDoctor = yield Doctor_1.default.updateOne({ _id: _id }, { password: hashedPassword, email: email, summary: summary });
        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    }
    else if (!modifiedMail && !modifiedPassword && modifiedSummary) {
        const updateDoctor = yield Doctor_1.default.updateOne({ _id: _id }, { summary: summary });
        if (updateDoctor.modifiedCount === 1) {
            return { message: "DOCTOR_UPDATED" };
        }
        else {
            return { error: "ERROR_UPDATE_DOCTOR" };
        }
    }
});
exports.updateD = updateD;
