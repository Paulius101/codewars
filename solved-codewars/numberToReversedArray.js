function digitize(n) {
    let correctArr = [];
    let arrOfNumbers = n.toString().split('');
    let arrOfNumbersLength = arrOfNumbers.length;
    for (let i = 0; i < arrOfNumbersLength; i++) {
        let x = arrOfNumbers.pop();
        correctArr.push(+x);
    }
    return correctArr;
}

/*
.toString pavercia i string .split ta string padalina i atskirus charcters
Tada ciklas eina per visus skaicius ir "pop() method removes the last element from an array"
.push ta paskutini skaiciu deda i naujo arejaus pradzia
*/