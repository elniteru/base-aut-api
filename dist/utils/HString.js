"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parse a value into string based on the key. Eg:
 * Usage: parseIdToUrl('customer/{id}/details', 'id', '33')
 * Result: `customer/33/details`
 * @param {string} text Endpoint for the API or any string that want to be parsed
 * @param {string} key Key to know the position
 * @param {string|number} value Value that need to be parsed
 * @returns {string}
 */
const parseValueToKeyString = (text, key, value) => {
    return text.replace(key, value);
};
/**
 * Parse a value into query params. Eg:
 * Usage: parseIdToUrl('customer/all', {'status': 'active'})
 * Result: `customer/all?status=active`
 * @param {string} endPoint Endpoint for the API or any string that want to be parsed
 * @param {any} urlQueryObject Object to be query params
 * @param {boolean} withEncodeObject Allow code to encode the urlQueryObject or not. Default is true
 * @returns {string}
 */
const parseIntoQueryParams = (endPoint, urlQueryObject, withEncodeObject = true) => {
    const queryString = [];
    for (const index in urlQueryObject) {
        if (urlQueryObject.hasOwnProperty(index)) {
            const keyValue = urlQueryObject[index];
            queryString.push(encodeURIComponent(index) +
                '=' +
                (withEncodeObject ? encodeURIComponent(keyValue) : keyValue));
        }
    }
    return `${endPoint}?${queryString.join('&')}`;
};
const HString = {
    parseValueToKeyString,
    parseIntoQueryParams
};
exports.default = HString;
