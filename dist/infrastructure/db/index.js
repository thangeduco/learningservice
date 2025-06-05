"use strict";
// src/infrastructure/db/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
exports.pool.on('connect', () => {
    console.log('📦 Connected to PostgreSQL database');
});
exports.pool.on('error', (err) => {
    console.error(' Unexpected error on idle PostgreSQL client', err);
    process.exit(-1);
});
