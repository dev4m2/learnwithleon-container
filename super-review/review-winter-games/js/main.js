//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(arr) {
    let newArr = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            newArr.push(num);
        }
    });
    return newArr;
}

let result = evenNumbers(arr);
alert(result);