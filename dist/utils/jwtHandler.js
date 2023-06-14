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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "DEFAULTJWTTOKEN.SECRET";
const signToken = (userId, name, lastName, role, email) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = (0, jsonwebtoken_1.sign)({ userId, name, lastName, role, email }, JWT_SECRET, { expiresIn: '1h' });
    return jwt;
});
exports.signToken = signToken;
const verifyToken = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    const validToken = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return validToken;
});
exports.verifyToken = verifyToken;
