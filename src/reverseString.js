function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

module.exports = { reverseString, reverseWords };
