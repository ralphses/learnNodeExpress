/*
//Selecting elements
//getElementByID
const h1 = document.getElementById('title');
h1.style.color = 'red'
h1.style.cursor ='pointer'

//getElementByTagName - this returns a node list (looks like and array)
const headings = document.getElementsByTagName('h1')
console.log(headings.length)
headings[1].style.color = 'blue'

//first get items, then convert to normal JS arrays in order to use array functions
const items = [...(document.getElementsByTagName('li'))];
items.forEach((item) => console.log(item.innerText))

//getElementByClassName - this returns a node list of this class
const classItems = [...(document.getElementsByClassName('it'))];
console.log(classItems.innerText)

const totalLen = classItems.reduce((acc, curr) => {
    acc += curr.innerText.length
    return acc;
},0)
console.log(totalLen)
*/

/*
//Trversing through element nodes 
//child node
const result = document.querySelector('.ul-class')
const allChildren = result.children;
console.log(allChildren)

//Parent node
const heading = document.querySelector('h2')
console.log(heading.parentElement) //This returns the parent element node

//previousSibling
const valu = document.querySelector('.ul-class')
console.log(valu)

const children = valu.nextSibling.nextSibling
console.log(children)

//nextElementSibling - selects the next lement down the line 
const nextEle = document.querySelector('.it');
console.log(nextEle.nextElementSibling)

//previousElementSibling - selects the next sibling up the line

*/

/*
//NodeValue
const item = document.getElementById('title')
const value = item.firstChild.nodeValue;
console.log(item.textContent)
console.log(value)

//getAttribut() returns the attribute of the class or id or others

const elements = document.querySelector('.it')
console.log(elements)
const otherElements = document.querySelectorAll('.title');
console.log(elements.getAttribute('id'))

*/

/*
//className
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

const classValue = first.className;
second.className = first.className;

third.classList.add(first.className, 'colors')

console.log(third.classList)

*/

/*
//createElement
const bodyDiv = document.querySelector('.my');
const newDev = document.createElement('div')
const newElement = document.createElement('button')
const text = document.createTextNode('click here')
newElement.appendChild(text)
newDev.appendChild(newElement)
bodyDiv.appendChild(newDev)

document.body.insertBefore(newElement, bodyDiv)

bodyDiv.classList.add('blue')

//replaceChild(newChild, oldChild)

//prepend
const heading = document.createElement('h2')
heading.innerText = 'some text'
document.body.prepend(heading)

//removeChild
const parentNode = document.querySelector('.my')
parentNode.removeChild(parentNode.querySelector('#hello'))
parentNode.remove()

*/

/*
//textContent

const apple = document.getElementById('it-id')
console.log(apple.textContent) //returns the textual content in an element 

//innerHTML
const newUl = document.createElement('ul')
newUl.innerHTML = `<li class="it">Orange</li>` // creates a complete html structure

const myDiv = document.querySelector('.my')
myDiv.append(newUl) 
*/

/*
//Eventlistening 
const newBtn = document.createElement('button')
newBtn.innerText = 'Events'
document.body.append(newBtn)

newBtn.addEventListener('click', () => alert('You just clicked a button'))

*/

//Submit EventListener 
const form = document.getElementById('form')
const name = document.getElementById('name')
const password = document.getElementById('password')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('form submitted')
})
