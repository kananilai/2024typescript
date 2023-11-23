"use strict";
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
console.log(activeHobbies);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 2.5, 4, 100);
console.log(addedNumbers);
