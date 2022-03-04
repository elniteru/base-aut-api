"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Randomize a number with min and max number
 * @param {number} min Min number for the random result
 * @param {number} max Max number for the random result
 * @returns {number}
 */
const getRandomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const numberHelper = {
    getRandomBetween
};
exports.default = numberHelper;
