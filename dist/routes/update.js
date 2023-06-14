"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const update_1 = require("../controllers/update");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/u', update_1.updateUser);
router.post('/d', update_1.updateDoctor);
