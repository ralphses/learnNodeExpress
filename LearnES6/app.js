let nums = [2,1,3]
/*
//More on template literals 
const firstName = 'Ralphs'
const lastName = 'Eze'

let fullName = `${firstName} ${lastName}`
console.log(fullName)

console.log(`template literals in another
line`)
*/

/*

//Destructuring Objects 
 const personalInfo = {
    name:'Raphael',
    email: 'eze.raph@gmail.com'
}

//accessing members of an object 
//const {name, email} = personalInfo;
const {name:fn, email:em} = personalInfo;

console.log(`${fn} ${em}`)
*/

/*
//Destructuring Arrays
let [firstName] = ['Ralphs', 'Eze'].sort()
console.log(firstName)

function addreseMaker(address) {
    const{city, state} = address
    const newAddress = {
        city, state,
        country: 'US'
    };

    console.log(`The address is ${city}, ${state} and ${newAddress.country}`)
}

const someAddress = {city:'Lafia', state: 'Nasarawa'}
addreseMaker(someAddress);
*/

/*
//For of loop

let incomes= [200, 23, 40]
let total = 0;

for(const income of incomes){
    total += income
}
console.log(total)

let fullName = 'Raphael'
for(const char of fullName) {
    console.log(char.toUpperCase())
}

for(let income of incomes) { //This won't work as for...of loop is used for iteration only and not to modify data
    income += 2;
}
console.log(incomes)

*/

/*
//Spread Operator 
//This is used to copy by value and not by rference 
//Default Params 
function add(numArray = []) {
    let total = 0;
    numArray.forEach((n) => total += n)
    console.log(total)
}



add(nums);

function sayHello(studentName = '') {
    console.log(studentName)
}

sayHello('This');
*/

//includes
//console.log(nums.includes(0))
//import (data) from './example.js';

//Stopped at 43:37

import { Animal } from './animal.js'

console.log(data)