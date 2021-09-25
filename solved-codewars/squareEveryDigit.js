function squareDigits(num) {
    const digits = num.toString().split('');
    let array = [];
    for (const n of digits) {
        array.push(parseInt(n))
    }
    let result = [];
    for (const a of array) {
        result.push(a ** 2)
    }
    const answer = result.join('')
    return parseInt(answer)
}

squareDigits(741)

// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer