"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHTTP = void 0;
const handleHTTP = (res, err) => {
    res.status(500).json({ error: err });
};
exports.handleHTTP = handleHTTP;
