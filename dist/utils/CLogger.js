"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLogger = void 0;
const simple_node_logger_1 = require("simple-node-logger");
const chalk = __importStar(require("chalk"));
class CLogger {
    constructor(debug = false) {
        this._debug = false;
        this._infoLog = (0, simple_node_logger_1.createRollingFileLogger)({
            logDirectory: 'log',
            fileNamePattern: 'info.<DATE>.log',
            dateFormat: 'YYYY.MM.DD',
            timestampFormat: 'HH:mm:ss.SSS'
        });
        this._errorLog = (0, simple_node_logger_1.createRollingFileLogger)({
            logDirectory: 'log',
            fileNamePattern: 'error.<DATE>.log',
            dateFormat: 'YYYY.MM.DD',
            timestampFormat: 'HH:mm:ss.SSS'
        });
        this._debug = debug;
    }
    debugLine(message) {
        const tag = '[DEBUG] ';
        if (this._debug) {
            process.stdout.write(chalk.gray(tag) + message + '\n');
        }
        this._infoLog.setLevel('trace');
        this._infoLog.trace(message);
    }
    errorLine(message) {
        const tag = '[ERROR] ';
        if (this._debug) {
            process.stdout.write(chalk.red(tag) + message + '\n');
        }
        this._errorLog.setLevel('error');
        this._errorLog.error(message);
    }
    warningLine(message) {
        const tag = '[WARNING] ';
        if (this._debug) {
            process.stdout.write(chalk.yellow(tag) + message + '\n');
        }
        this._infoLog.setLevel('warn');
        this._infoLog.warn(message);
    }
}
exports.CLogger = CLogger;
