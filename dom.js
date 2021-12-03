const head = document.getElementById('head')
head.style.backgroundColor = "blue";
head.style.color = "white";

head.style.borderBottom = "5px solid black"
head.style.borderRadius = "5px "
const Additem = document.getElementById('books')
Additem.style.fontWeight = "bold"
Additem.style.color = "green"
Additem.style.backgroundColor = "yellow"

const items = document.getElementsByClassName('list-group-item')
items[3].style.backgroundColor = "green"
items[3].style.color = "yellow"
for (let index = 0; index < items.length; index++) {
    items[index].style.fontWeight = "bold"

}

const tag = document.getElementsByTagName('li')
tag[5].style.backgroundColor = 'green'
tag[5].style.color = 'yellow'
tag[5].style.fontWeight = 'bold'

//picks frirst li
const lists = document.querySelector('li')
lists.style.color = 'orange'

const lists2 = document.querySelector('li:nth-child(3)')
lists2.style.backgroundColor = 'green'
lists2.style.color = 'yellow'
lists2.style.borderBottom = '2px solid yellow'
// lists2.innerHTML = ""

const lis = document.querySelectorAll('li')
lis[2].style.color = 'green'
lis[2].style.backgroundColor = 'yellow'

