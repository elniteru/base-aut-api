"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const totp_generator_1 = __importDefault(require("totp-generator"));
const getValidOtp = (secretCode) => {
    return (0, totp_generator_1.default)(secretCode);
};
const HTotp = {
    getValidOtp
};
exports.default = HTotp;
