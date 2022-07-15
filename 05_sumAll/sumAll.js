const NUMBER = 'number';

const sumAll = function(n, m) {
    if (n < 0 || m < 0 || typeof(n) !== NUMBER || typeof(m) !== NUMBER) return 'ERROR';
    if (n === m) return m;
    if (n > m) [n, m] = [m, n];
    return sumAll(n, m - 1) + m;
};

// Do not edit below this line
module.exports = sumAll;
