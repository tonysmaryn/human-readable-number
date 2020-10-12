module.exports = function toReadable(number) {
    const dictionary = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    let arr = String(number).split('');
    let result = '';
    if (arr.length > 2) {
        if (arr[1] == '0' && arr[2] == 0) {
            result = `${dictionary[arr[0]]} hundred`;
        } else if (arr[1] === '0') {
            result = `${dictionary[arr[0]]} hundred ${dictionary[arr[2]]}`
        } else if (arr[1] === '1') {
            result = `${dictionary[arr[0]]} hundred ${dictionary[arr[1] + arr[2]]}`
        } else if (arr[2] === '0') {
            result = `${dictionary[arr[0]]} hundred ${dictionary[arr[1] + '0']}`;
        } else {
            result = `${dictionary[arr[0]]} hundred ${dictionary[arr[1] + '0']} ${dictionary[arr[2]]}`
        }
    } else if (arr.length == 2) {
        if (arr[0] === '1') {
            result = `${dictionary[arr[0] + arr[1]]}`
        } else if (arr[1] === '0') {
            result = `${dictionary[arr[0] + '0']}`;
        } else {
            result = `${dictionary[arr[0] + '0']} ${dictionary[arr[1]]}`
        }
    } else {
        if (arr[0] === '0') {
            result = 'zero';
        } else {
            result = `${dictionary[arr[0]]}`
        }
    }
    return result;
}
