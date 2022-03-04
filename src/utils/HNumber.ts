/**
 * Randomize a number with min and max number
 * @param {number} min Min number for the random result
 * @param {number} max Max number for the random result
 * @returns {number}
 */
const getRandomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const numberHelper = {
  getRandomBetween
};

export default numberHelper;
