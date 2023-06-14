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
exports.registerNewUser = void 0;
const errorHandler_1 = require("../utils/errorHandler");
const register_1 = require("../services/register");
const registerNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserData = yield (0, register_1.registerUser)(req.body);
        res.send(newUserData);
    }
    catch (error) {
        (0, errorHandler_1.handleHTTP)(res, "ERROR_REGISTER_NEW_USER");
    }
});
exports.registerNewUser = registerNewUser;
