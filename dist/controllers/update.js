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
exports.updateDoctor = exports.updateUser = void 0;
const errorHandler_1 = require("../utils/errorHandler");
const update_1 = require("../services/update");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = yield (0, update_1.updateU)(req.body);
        res.send(userData);
    }
    catch (error) {
        (0, errorHandler_1.handleHTTP)(res, "ERROR_UPDATE_USER");
    }
});
exports.updateUser = updateUser;
const updateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctorData = yield (0, update_1.updateD)(req.body);
        res.send(doctorData);
    }
    catch (error) {
        (0, errorHandler_1.handleHTTP)(res, "ERROR_UPDATE_DOCTOR");
    }
});
exports.updateDoctor = updateDoctor;
