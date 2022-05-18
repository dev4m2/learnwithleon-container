//--- Easy
//create a variable and assign it a number
var num = 15;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let numFromInput = document.querySelector("#danceDanceRevolution").value;

//add 25 to that number
numFromInput += 25;

//alert that number
alert(numFromInput);

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwo);

//function for event listener
function addTwo()
{
    const myInput = document.querySelector("#danceDanceRevolution");
    let inputValue = parseInt(myInput.value);
    let result = inputValue + num;
    // console.log(result);
    alert(result);
}
