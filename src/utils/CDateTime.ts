import moment from "moment";

export class CDateTime {
  _dateFormat: string;
  _dateTimeFormat: string;
  _humanDateFormat: string;
  _humanDateTimeFormat: string;
  _utcOffsetHour: number;

  constructor(dateFormat: string, dateTimeFormat: string, humanDateFormat: string, humanDateTimeFormat: string, utcOffset: number) {
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
  getTodayDate(): string {
    return moment(new Date())
      .utcOffset(this._utcOffsetHour)
      .format(this._dateTimeFormat);
  }

  /**
   * Add x days to a date
   * @param {string} startDate Date format: YYYY-MM-DD
   * @param {number} numberOfDate number of days that want to be added
   * @returns {string}
   */
  addDate(
    startDate: string,
    numberOfDate: number
  ): string {
    return moment(startDate, this._dateFormat)
      .add(numberOfDate, 'days')
      .format(this._dateFormat);
  }

  /**
   * Subtract x days to a date
   * @param {string} startDate Date format: YYYY-MM-DD
   * @param {number} numberOfDate number of days that want to be subtract
   * @returns {string}
   */
  subtractDate (
    startDate: string,
    numberOfDate: number
  ): string {
    return moment(startDate, this._dateFormat)
      .subtract(numberOfDate, 'days')
      .format(this._dateFormat);
  }

  /**
   * Calculate difference between x and y date
   * @param {string} startDate Date format: YYYY-MM-DD
   * @param {string} endDate Date format: YYYY-MM-DD
   * @returns {number} Difference between the start and end date (in days)
   */
  getDateBetween (
    startDate: string,
    endDate: string,
  ): number {
    return moment(endDate, this._dateFormat)
      .diff(moment(startDate, this._dateFormat), 'days');
  }
}