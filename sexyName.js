


function sexyName(name) {
    const SCORES = {
        'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
        'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
        'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
        'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23
    }

    const keys = Object.keys(SCORES)
    // console.log(keys);
    const values = Object.values(SCORES)
    // console.log(values);
    const entries = Object.entries(SCORES)
    // console.log(entries);

    // let result = SCORES.filter()
    let abc = []
    for (const n of name) {
        for (const entry of entries) {
            if (n.toUpperCase() === entry[0]) {
                abc.push(entry[1])
            }
        }
    }
    const sum = abc.reduce((suma, item) => suma + item, 0)
    if (sum <= 60) {
        console.log(`${name} NOT TOO SEXY`)
    }
    if (sum <= 300) {
        console.log(`${name} PRETTY SEXY`)
    }
    if (sum <= 599) {
        console.log(`${name} VERY SEXY`)
    }
    if (sum >= 600) {
        console.log(`${name} THE ULTIMATE SEXIEST`)
    }
}

const test = sexyName('Paulius')
const test1 = sexyName('Sigita')
const test2 = sexyName('Sandra')
const test3 = sexyName('Rimantas')
const test4 = sexyName('Virginijus')
const test5 = sexyName('Donatas')
const test6 = sexyName('Vytautas')
const test7 = sexyName('Andrius')
const test8 = sexyName('Eugenijus')
const test9 = sexyName('Evaldas')
const test10 = sexyName('Ieva')
const test11 = sexyName('Pijus')
const test12 = sexyName('Raimonda')
const test13 = sexyName('Konstantinas')

// How sexy is your name ? Write a program that calculates how sexy one's name is according to the criteria below.

// There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES(Ruby).Add up the letters(case -insensitive) in your name to get your sexy score.Ignore other characters.

// score <= 60: 'NOT TOO SEXY'
// 61 <= score <= 300: 'PRETTY SEXY'
// 301 <= score <= 599: 'VERY SEXY'
// score >= 600: 'THE ULTIMATE SEXIEST'