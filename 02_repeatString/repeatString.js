const repeatString = function(string, times) {
    if (times < 0) return 'ERROR';
    const output = [];
    for (let i = 0; i < times; i++) output.push(string);
    return output.join('');
};

// Do not edit below this line
module.exports = repeatString;
