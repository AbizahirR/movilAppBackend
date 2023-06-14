"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.redirect('https://docs.google.com/uc?export=download&id=1s2ddBU01XeqpA7gEjKdrwCvez8wK0IK3');
});
