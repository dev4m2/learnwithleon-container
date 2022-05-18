//Get a dog photo from the dog.ceo api and place the photo in the DOM

// const url = 'https://dog.ceo/api/breeds/image/random';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const photo = document.querySelector('img');

fetch(url)
    .then(response => response.json())
    .then(data => {
        // result = data.message;
        result = data.drinks[0].strDrinkThumb;
        console.log(result);
        photo.src = result;
    })
    .catch(error => console.log(error)
    );
