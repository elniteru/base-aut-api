export declare class CDateTime {
    _dateFormat: string;
    _dateTimeFormat: string;
    _humanDateFormat: string;
    _humanDateTimeFormat: string;
    _utcOffsetHour: number;
    constructor(dateFormat: string, dateTimeFormat: string, humanDateFormat: string, humanDateTimeFormat: string, utcOffset: number);
    /**
     * Get Today Date
     * @returns {string} based on date format configuration
     */
    getTodayDate(): string;
    /**
     * Add x days to a date
     * @param {string} startDate Date format: YYYY-MM-DD
     * @param {number} numberOfDate number of days that want to be added
     * @returns {string}
     */
    addDate(startDate: string, numberOfDate: number): string;
    /**
     * Subtract x days to a date
     * @param {string} startDate Date format: YYYY-MM-DD
     * @param {number} numberOfDate number of days that want to be subtract
     * @returns {string}
     */
    subtractDate(startDate: string, numberOfDate: number): string;
    /**
     * Calculate difference between x and y date
     * @param {string} startDate Date format: YYYY-MM-DD
     * @param {string} endDate Date format: YYYY-MM-DD
     * @returns {number} Difference between the start and end date (in days)
     */
    getDateBetween(startDate: string, endDate: string): number;
}
