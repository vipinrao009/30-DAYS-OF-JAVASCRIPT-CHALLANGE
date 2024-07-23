// Task 1
const heading = document.getElementById('title')
heading.innerText = 'SH LIBRARY JIYANPUR'

// Task 2
const elements = document.getElementsByClassName('text');
 for(let i =0; i<elements.length; i++){
    elements[i].style.backgroundColor = 'lightgreen'
 }

// Task 3

const newDiv = document.createElement('div')
newDiv.textContent = 'This is new div'
document.body.appendChild(newDiv)

// Task 4
const list = document.getElementById('item_list')

const newList = document.createElement('li')
newList.textContent = 'Item 4'
list.appendChild(newList)

// Task 5
const removeDom = document.getElementById('quote')

if(removeDom){
    removeDom.remove()
}

// Task 6
const ulElements = document.getElementById('item_list');
for (let i = 0; i < ulElements.length; i++) {
  ulElements[i].removeChild(ulElements[i].lastElementChild); // Removes the last child of each <ul> with class 'itemList'
}
// if(ulElement && ulElement.lastElementChild){
//     ulElement.remove(ulElement.lastElementChild)
// }

// Task 7

const myImage = document.getElementById('myImage')
myImage.setAttribute('src','https://www.shutterstock.com/image-vector/bookstore-aisle-interior-shelf-cartoon-600nw-2288135719.jpg')

// Task 8

 // Function to add a class
 function addClass() {
    const pElement = document.getElementById('myParagraph');
    pElement.classList.add('highlight');
}

// Function to remove a class
function removeClass() {
    const pElement = document.getElementById('myParagraph');
    pElement.classList.remove('highlight');
}

// Task 9
