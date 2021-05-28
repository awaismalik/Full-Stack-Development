// // Examine the document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello DOM';
// console.log(document.forms[0]);
// Get ElementById

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent = 'Hello DOM Title';
// headerTitle.innerText = 'Goodby';

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>What is this!</h3>'
// headerTitle.style.color = 'darkOrange';
// headerTitle.style.fontWeight = 'Bold';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// items[1].textContent = 'New Ariel';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'Red';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }


// Get QuerySelector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px #ccc';

// var inputVar = document.querySelector('input');
// inputVar.value = 'Hello World';

// var inputSubmit = document.querySelector('input[type="submit"]');
// inputSubmit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QuerySelectorAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello New Item';
// titles[1].textContent = 'hey we are in list';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Traversing the DOM
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);

// children

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// console.log(itemList.children);

// itemList.children[0].style.backgroundColor = 'red';

// FirstChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello There';

// LastElementChild

// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent = 'Last Item';

// NextSibling

// console.log(itemList.nextElementSibling);

// // Create New Element
// var newDiv = document.createElement('div');

// // assign class to div
// newDiv.className = 'hello';

// // assign ID to Div
// newDiv.id = 'newID';

// // adding attribute

// newDiv.setAttribute('title', 'Hello Div');
// // Create Text Node

// newDiv.innerHTML = 'Hello New Div';
// console.log(newDiv);

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
    document.getElementById('header-title').textContent = 'Change Update';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
}