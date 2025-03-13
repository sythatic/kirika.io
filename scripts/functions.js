// Toggle 'theme1'
const toggleButton = document.getElementById('theme-1');
toggleButton.addEventListener('click', () => {
	document.documentElement.classList.toggle('theme-1');
});

// Toggle collapsible content
var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		var folded = this.nextElementSibling;
		if (folded.style.display === 'block') {
			folded.style.display = 'none';
		} else {
			folded.style.display = 'block';
		}
	});
}

// Tabber Controller
function openCity(evt, cityName) {
	var i, tabcontent, tab;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tab = document.getElementsByClassName("tab");
	for (i = 0; i < tab.length; i++) {
		tab[i].className = tab[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}