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

	

