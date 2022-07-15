const ROUND_TO_PLACES = 1;

const round = function(number, places) {
    const shift = 10 ** places;
    return Math.round(number * shift) / shift;
};

const ftoc = function(fahrenheit) {
    return round((fahrenheit - 32) * 5 / 9, ROUND_TO_PLACES);
};

const ctof = function(celsius) {
    return round(celsius * 9 / 5 + 32, ROUND_TO_PLACES);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
