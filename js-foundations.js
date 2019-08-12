// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

// var divisibleBy3 = (number) => {
//   if (number%3 === 0) {
//     return `${number} is evenly divisble by three`;
//   } else {
//     return `${number} is NOT evenly divisble by three`;
//   }
// };
// console.log(divisibleBy3(3));

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

// var helloMe = {
//   firstName: "Katya",
//   lastName: "Neumann",
//   age: 18,
//   city: "San Diego",
//   getData: function() {return this.firstName +" "+ this.lastName + " is " + this.age + " old and lives in " + this.city + "."}
// };
// console.log(helloMe.getData());



// -------------------------------------------------
// Consider the variable:

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"];

// 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"

// const filtered = randomNouns.filter((x, i) => (i - 1)%2);
// console.log(filtered.join(" "));

// 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]

// console.log(randomNouns.map((element) => {
//   return element.length;
// }));

// 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// function Capitalizer(randomNouns){
//   //let randomNouns1 = ""
//   let arr = [];
//   for (var i=0; i < randomNouns.length; i++){
//     let randomNouns1 = randomNouns[i].charAt(0).toUpperCase() + randomNouns[i].substring(1, randomNouns[i].length);
//     //console.log(randomNouns1)
//     arr.push(randomNouns1);
//   }
// return arr;
// }
// console.log((Capitalizer(randomNouns)).join(' '));


// -------------------------------------------------
// Consider the variables:
// var testString1 = "learn"
// var testString2 = "academy"
// var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

// function alphabetSoup(string){
//     let newArr = string.split('');
//     let newString = newArr.sort();
//     return newString.join("");
// }
// // console.log(alphabetSoup(testString1));
// console.log("\"" + alphabetSoup(testString1)+ "\" \"" + alphabetSoup(testString2) + "\" \"" + alphabetSoup(testString3) + "\"");



// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

// function alphabetSoup2(string1, string2, string3){
//     let newString = string1 + string2 + string3;
//     let newArr = newString.split('').sort();
//     return newArr.join("");
// }
// console.log(alphabetSoup(testString1));
// console.log(alphabetSoup2(testString1,testString1,testString1));


// -------------------------------------------------
// Consider the variables:
// var amounts = [9, 1, 8, 16, 5, 1, 42]
// var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

// function combinedString(arr1,arr2) {
//     let newArr = arr1.map((e, i) => e + " " + arr2[i]);
//     return newArr.join(' ');
//   }
// console.log(combinedString(amounts,animals));

// 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
// function listAnimals(arr1,arr2) {
//   let final = "";
// for (var i = 0; i < arr1.length; i++){
//   let str = arr2[i];
//   if (arr1[i]==1){
//     str = str.substring(0, str.length-1);
//   }
//   final += arr1[i] + " " + str + " ";
// }
// return final;
// }
// console.log(listAnimals(amounts, animals));
