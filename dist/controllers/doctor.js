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
exports.getDoctors = void 0;
const doctors_1 = require("../services/doctors");
const errorHandler_1 = require("../utils/errorHandler");
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctors = yield (0, doctors_1.getAllDoctors)();
        console.log(doctors);
        res.send({ data: doctors, user: req.user });
    }
    catch (error) {
        (0, errorHandler_1.handleHTTP)(res, "ERROR_DOCTORS_ROUTE");
    }
});
exports.getDoctors = getDoctors;
