const palindromes = function (string) {
    const letters = string.match(/[A-Z]/gi).map((letter) => letter.toUpperCase());
    for (let i = 0, j = letters.length - 1; i <= j; i++, j--) {
        if (letters[i] !== letters[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
