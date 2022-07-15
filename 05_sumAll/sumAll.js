const sumAll = function(n, m) {
    if (n === m) return m;
    if (n > m) [n, m] = [m, n];
    return sumAll(n, m - 1) + m;
};

// Do not edit below this line
module.exports = sumAll;
