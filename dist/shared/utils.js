"use strict";
// src/shared/utils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = exports.safeParseInt = exports.nowISOString = void 0;
const nowISOString = () => new Date().toISOString();
exports.nowISOString = nowISOString;
const safeParseInt = (value, fallback = 0) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? fallback : parsed;
};
exports.safeParseInt = safeParseInt;
const logRequest = (label, data) => {
    console.log(`[${label}]`, JSON.stringify(data, null, 2));
};
exports.logRequest = logRequest;
