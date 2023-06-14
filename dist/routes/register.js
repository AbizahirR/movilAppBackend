"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const register_1 = require("../controllers/register");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', register_1.registerNewUser);
router.post('/doctor', register_1.registerNewUser);
