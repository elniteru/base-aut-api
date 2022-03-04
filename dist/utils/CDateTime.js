"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDateTime = void 0;
const moment_1 = __importDefault(require("moment"));
class CDateTime {
    constructor(dateFormat, dateTimeFormat, humanDateFormat, humanDateTimeFormat, utcOffset) {
        this._dateFormat = dateFormat;
        this._dateTimeFormat = dateTimeFormat;
        this._humanDateFormat = humanDateFormat;
        this._humanDateTimeFormat = humanDateTimeFormat;
        this._utcOffsetHour = utcOffset;
    }
    /**
     * Get Today Date
     * @returns {string} based on date format configuration
     */
    getTodayDate() {
        return (0, moment_1.default)(new Date())
            .utcOffset(this._utcOffsetHour)
            .format(this._dateTimeFormat);
    }
    /**
     * Add x days to a date
     * @param {string} startDate Date format: YYYY-MM-DD
     * @param {number} numberOfDate number of days that want to be added
     * @returns {string}
     */
    addDate(startDate, numberOfDate) {
        return (0, moment_1.default)(startDate, this._dateFormat)
            .add(numberOfDate, 'days')
            .format(this._dateFormat);
    }
    /**
     * Subtract x days to a date
     * @param {string} startDate Date format: YYYY-MM-DD
     * @param {number} numberOfDate number of days that want to be subtract
     * @returns {string}
     */
    subtractDate(startDate, numberOfDate) {
        return (0, moment_1.default)(startDate, this._dateFormat)
            .subtract(numberOfDate, 'days')
            .format(this._dateFormat);
    }
    /**
     * Calculate difference between x and y date
     * @param {string} startDate Date format: YYYY-MM-DD
     * @param {string} endDate Date format: YYYY-MM-DD
     * @returns {number} Difference between the start and end date (in days)
     */
    getDateBetween(startDate, endDate) {
        return (0, moment_1.default)(endDate, this._dateFormat)
            .diff((0, moment_1.default)(startDate, this._dateFormat), 'days');
    }
}
exports.CDateTime = CDateTime;
