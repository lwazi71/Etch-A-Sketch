const container = document.querySelector('.container')
const gridContainer = document.querySelector('#grid-container');
const clearGrid = document.querySelector('#clear-grid');
const resizeGrid = document.querySelector('#resize-button');
const box = document.querySelectorAll('.box');

function createDivs(col, rows) {
	gridContainer.innerHTML = '';
	for (let i = 0; i < (col * rows); i++) {
		const element = document.createElement('div');
		gridContainer.style.gridTemplateColumns = `repeat(${col},1fr)`;
		gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;

		gridContainer.appendChild(element).classList.add('box')
		const box = document.querySelectorAll('.box');
		box.forEach(function (box) {
			box.addEventListener('mouseenter', function () {
				this.style.backgroundColor = '#000000';
			});
		});

		function clearcontent() {
			document.querySelectorAll('.box');
			box.forEach(function (box) {
				box.style.backgroundColor = 'antiquewhite';
			});
		}

		clearGrid.addEventListener('click', clearcontent);

	}


}

createDivs(16, 16);


function resizecontent() {
	document.querySelectorAll('.box');
	box.forEach(function (box) {
		box.style.backgroundColor = 'antiquewhite';
		document.getElementById('grid-container').innerHTML = '';
	});

	let size = prompt("Please choose grid size between 5-64!", 16)
	if (size >= 5 && size <= 64) {
		createDivs(size, size);
	} else {
		do {
			size = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
		}
		while (size < 5 || size > 64);
		createDivs(size, size);
	}
}
resizeGrid.addEventListener('click', resizecontent);
