/*
//Template literals  

const name1 = 'Ralphses';
function greet() {
    return "Eze";
}

const value = `How far ${name1} ${greet()}`;

console.log(value);
*/

/*
//Arrays and properties 
//Array concatenation

let names = ['Ralphs', 'Asam']
let lastNames = ['Eze', 'Ada']

let fullNames = names.concat(lastNames);

console.log(fullNames)
let newV = fullNames.splice(0, 2);

console.log(newV);
*/

/*
//Arrays and for loop
const names = ['Anna', 'Susy']
const lastName = 'last name'

for(let i = 0; i < names.length; i++) {
    names[i] += ` ${lastName}`;
}
console.log(names);
*/

/* 

//Reference Vs Value 
const num = 1;
const num2 = num;

console.log(`${num} ${num2}`);

let per = {name:'Susy'};



console.log(per.name)


//To stope the change 


let per2 = {...per}
per2.name = 'New name'
console.log(per.name)
console.log(per2.name)

let bool = true;

bool ? console.log("True") : console.log("False")

function oneFun() {
becomesGlobal = "Aglobal";
}

oneFun();
console.log(becomesGlobal);
*/

/*

//Callback functions

function morning() {
    return `Good morning `;
}

function greet(name, fun) {
    console.log(`Hey ${name}, my name is ${fun()}`);
}

greet('Ralphses', morning)
*/


const people = [
    {name:'Bob', age:20, position:'Developer'},
    {name:'Ralphs', age:70, position:'Designer'},
    {name:'Ralphs', age:20, position:'Designer'},
    {name:'Chris', age:23, position:'Pianist'}
];

/*
//forEach method

//This is a callback function
function showPerson(person) {
    console.log(person);
}

people.forEach(showPerson)

people.forEach((item) => console.log(item.age)); 

*/

/*
//map
const ages = people.map((person) => {
  return person.age;
} )

const details = people.map((person) => {
    return `<h1>${person.name}`;
  } )

document.write(details);
*/

/*
//Filter
let youngPeople = (people.filter((person) => person.age <= 25))
.map((item) => {
    return `<h1>${item.name}</h1>`;
  })
document.write(youngPeople)

*/

/*
//Find
const aPers = people.find((person) => person.age === 20);

console.log(aPers);
*/

//reduce