// Task 1: Introduction

console.log('Hello, ES6');





// ---------------------------------------------
// Task 2: Variables (let) and Scoping








// Task 2: Execise 1: Fix the code to print 15

var age = 15;

for (let age = 1; age <= 10; age++) {
    console.log(age);
}

console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

var myDog = "Jack Russell Terrier";
var shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier







// ---------------------------------------------
// Task 3: Variables (const) and Immutability








// TASK 3: Exercise: Refactor the code to use let/const

var painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};

Object.freeze(painter);
Object.freeze(painter.paintings);

// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }





// ---------------------------------------------
// TASK 4: Destructuring






// Task 4: Exercise: Extract data with destructuring

const ingredients = {
    tea: 'black',
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

// Destructure the parameters
function prepareChai(tea,spices,milk,sweetener) {

    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(ingredients);





// ---------------------------------------------
// TASK 5: Strings and Interpolation







// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria";
const city = "Sofia";

if (country.startsWith("Bulg")) {
    console.log("The country starts with Bulg");
}

if (city.startsWith("So")) {
    console.log("The name starts with So");
}

if (city.endsWith("a")) {
    console.log("The name ends with a");
}

console.log(
    'The capital of ${country} is the city of ${city}'
);









// ---------------------------------------------
// TASK 6: Arrow functions








// TASK 6: Exercise: Filter out only the prime numbers from the array

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
};

const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);
console.log(primeNumbers);







// ---------------------------------------------
// TASK 7: Arrow functions and this







// Task 7: Exercise

function Translator() {
    this.phrase = "good day";
    this.englishBulgarianDictionary = {
        good: "добър",
        day: "ден"
    }
}

Translator.prototype.getBulgarianPhrase = function() {
    return this.phrase
        .split(" ")
        .map(function(word) {
            return this.englishBulgarianDictionary[word];
        }.bind(this)) // Use bind() to capture the value of 'this'
        .join(" ");
}
 
const translator = new Translator();
console.log(translator.getBulgarianPhrase());

// }
 
// const translator = new Translator();
// console.log(translator.getBulgarianPhrase());
