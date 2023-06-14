"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const doctor_1 = require("../controllers/doctor");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', doctor_1.getDoctors);
