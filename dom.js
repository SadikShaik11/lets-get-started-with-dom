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
