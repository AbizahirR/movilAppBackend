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
exports.checkLogin = void 0;
const Doctor_1 = __importDefault(require("../models/Doctor"));
const User_1 = __importDefault(require("../models/User"));
const encryptHandler_1 = require("../utils/encryptHandler");
const jwtHandler_1 = require("../utils/jwtHandler");
const checkLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = user;
    let existUser = yield User_1.default.findOne({ email: email });
    if (!existUser) {
        existUser = yield Doctor_1.default.findOne({ email: email });
        if (!existUser)
            return { error: "WRONG_EMAIL" };
    }
    ;
    const isMatch = yield (0, encryptHandler_1.comparePassword)(password, existUser.password);
    if (!isMatch)
        return { error: "WRONG_PASSWORD" };
    const token = yield (0, jwtHandler_1.signToken)(existUser._id, existUser.name, existUser.lastName, existUser.role, existUser.email);
    const filteredUserData = {
        _id: existUser._id,
        name: existUser.name,
        lastName: existUser.lastName,
        email: existUser.email,
        role: existUser.role,
        token: token
    };
    return filteredUserData;
});
exports.checkLogin = checkLogin;
