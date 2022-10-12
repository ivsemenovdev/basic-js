const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {

    const monthArray = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

    const isValidDate = (d) => {
        return d instanceof Date;
    }

    if (date === undefined) return "Unable to determine the time of year!";
    if (arguments[0] === undefined) return 'Unable to determine the time of year!';
    if (!isValidDate(date)) throw new Error("Invalid date!");

    try {
        date.getTime();
    } catch (error) {
        throw new Error ('Invalid date!');
    }

    return monthArray[date.getMonth()]

}

module.exports = {
    getSeason
};
