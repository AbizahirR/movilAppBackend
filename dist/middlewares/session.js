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
exports.checkJWT = void 0;
const jwtHandler_1 = require("../utils/jwtHandler");
const checkJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ").pop()) || null;
        if (!token)
            return res.status(400).send({ error: "INVALID_SESSION" });
        const isValidUser = yield (0, jwtHandler_1.verifyToken)(token);
        if (!isValidUser)
            return res.status(400).send({ error: "INVALID_SESSION" });
        req.user = isValidUser;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ error: error.message });
    }
});
exports.checkJWT = checkJWT;
