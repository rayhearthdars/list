//Changes the color of list element when clicked on
function state(e) {
	let el;
	if (!e) {
		e = window.event;
	}
	el = e.target || e.srcElement;

	if (el.className === 'hot') {
		el.classList.replace('hot', 'normal');
	} else if (el.className === 'normal') {
		el.classList.replace('normal', 'cool');
	} else if (el.className === 'cool') {
		el.classList.replace('cool', 'completed');
	} else {
		el.classList.replace('completed', 'hot')
	}
}

var elClick = document.getElementsByTagName('li');
elClick = Array.from(elClick);
elClick.forEach(element => element.addEventListener('click', function(e) {state(e)}, false));


// add new items in list

function add() {
var item = document.getElementsByTagName('li');

var txt = document.getElementById(newItems);
var newItem = document.createTextNode(txt);
item.createElement('li');
item.appendChild(newItem);

}

document.getElementsByTagName('ul')[0].addEventListener('submit', add, false);


	

