// const head = document.getElementById('head')
// head.style.backgroundColor = "blue";
// head.style.color = "white";

// head.style.borderBottom = "5px solid black"
// head.style.borderRadius = "5px "
// const Additem = document.getElementById('books')
// Additem.style.fontWeight = "bold"
// Additem.style.color = "green"
// Additem.style.backgroundColor = "yellow"

// const items = document.getElementsByClassName('list-group-item')
// items[3].style.backgroundColor = "green"
// items[3].style.color = "yellow"
// for (let index = 0; index < items.length; index++) {
//     items[index].style.fontWeight = "bold"

// }

// // const tag = document.getElementsByTagName('li')
// // tag[5].style.backgroundColor = 'green'
// // tag[5].style.color = 'yellow'
// // tag[5].style.fontWeight = 'bold'

// // //picks frirst li
// // const lists = document.querySelector('li')
// // lists.style.color = 'orange'

// // const lists2 = document.querySelector('li:nth-child(3)')
// // lists2.style.backgroundColor = 'green'
// // lists2.style.color = 'yellow'
// // lists2.style.borderBottom = '2px solid yellow'
// // // lists2.innerHTML = ""

// // const lis = document.querySelectorAll('li')
// // lis[2].style.color = 'green'
// // lis[2].style.backgroundColor = 'yellow'

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (let index = 0; index < odd.length; index++) {
//     odd[index].style.backgroundColor = 'green'
// }
// /------------------------------------------------------------------------------

var listitems = document.querySelector('.list-group-item')
listitems.parentElement.style.backgroundColor = 'default'
// listitems.parentElement.parentElement.style.backgroundColor = ""

// console.log(listitems.parentNode);
var child = document.querySelector('.list-group')
console.log(child.children);
child.firstElementChild.textContent = "some good books you can read"
child.lastElementChild.textContent = "The secret of desires"
child.lastElementChild.textContent = "The secret"

//siblng elements
const sibling = document.querySelector('.list-group-item')
console.log(sibling);
console.log(sibling.nextSibling);//this will give me the #text inside .list-group-items
console.log(sibling.nextElementSibling);
//now this will give me the next acutal sibling 
sibling.nextElementSibling.style.backgroundColor = "black"
sibling.nextElementSibling.style.color = "white"
//similary for previous element if there is no previous it gives us null
console.log(sibling.previousElementSibling);

//creatind a node 
var newelement = document.createElement('p')
newelement.className = "new_para"
newelement.id = "para"
newelement.setAttribute('title', 'hello')
var text = document.createTextNode("Hello world ")
newelement.appendChild(text)
console.log(newelement);

//getting a part to insert i will take body

const container = document.querySelector('body .container')
const h1 = document.querySelector('h1')
// const h1 =document.querySelector('body h1')
//  container.insertBefore(h1,newelement)
container.insertBefore(newelement, h1)