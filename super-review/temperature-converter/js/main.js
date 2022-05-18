//Write your pseduo code first! 

//Pseudo Code
// convert celsius to fahrenheit
// create function
// (0°C × 9/5) + 32 = 32°F

function convertCelsiusToFahrenheit()
{
    const inTemp = document.querySelector("#inputTemperature");
    let celsius = parseInt(inTemp.value);
    console.log("C° = " + celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    result = "F° = " + fahrenheit;
    console.log(result);
    alert(result);
    h2.innerHTML = result;
}

const h2 = document.querySelector("h2");

h2.addEventListener('click', convertCelsiusToFahrenheit);
