"use strict";
const hobbies = ["Sports", "Cooking", "Reading", "Gaming"];
const activeHobbies = ["Hiking", ...hobbies];
console.log(activeHobbies);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 2.5, 4, 100);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);
const person = {
    firstName: "Max",
    age: 30,
};
const { firstName: userName, age } = person;
console.log(userName, age);
