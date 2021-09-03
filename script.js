const container = document.querySelector('.container')
let gridContainer = document.querySelector('#grid-container');
let clearGrid = document.querySelector('#clear-grid');
let resizeGrid = document.querySelector('#resize-button');
const individualGridBox = document.querySelectorAll('.individualGridBox');
const rgb = document.querySelector('#rgb');
const colorPicker = document.querySelector('#color-picker');
const black = document.querySelector('#black');

function setupUI(col, rows) {
	gridContainer.innerHTML = '';
	for (let i = 0; i < (col * rows); i++) {
		const element = document.createElement('div');
		gridContainer.style.gridTemplateColumns = `repeat(${col},1fr)`;
		gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
		gridContainer.appendChild(element).classList.add('individualGridBox');
	}

	const individualGridBox = document.querySelectorAll('.individualGridBox');
	individualGridBox.forEach(function (individualGridBox) {
		individualGridBox.addEventListener('mouseenter', function () {
			individualGridBox.style.backgroundColor = '#000000';
		});
	});


	function clearContent() {
		document.querySelectorAll('.individualGridBox');
		individualGridBox.forEach(function (individualGridBox) {
			var white = 'rgb(255,255,255)';
			individualGridBox.style.backgroundColor = white;
		});
	}
	clearGrid.addEventListener('click', clearContent);


	function generateRandomColor() {
		document.querySelectorAll('.individualGridBox')
		individualGridBox.forEach(function (individualGridBox) {
			var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
			individualGridBox.addEventListener('mouseenter', function () {
				individualGridBox.style.backgroundColor = randomColor;
				return randomColor;
			});
		});


	}
	rgb.addEventListener('click', generateRandomColor);

	function blackColor() {
		document.querySelectorAll('.individualGridBox')
		individualGridBox.forEach(function (individualGridBox) {
			individualGridBox.addEventListener('mouseenter', function () {
				individualGridBox.style.backgroundColor = '#000000';
			});
		});


	}
	black.addEventListener('click', blackColor);

}
setupUI(16, 16);


function resizeContent() {
	document.querySelectorAll('.individualGridBox');
	individualGridBox.forEach(function (individualGridBox) {
		var white = 'rgb(255,255,255)';
		individualGridBox.style.backgroundColor = white;

	});

	let size = prompt("Please choose grid size between 5-64!", 16)
	if (size >= 5 && size <= 64) {
		setupUI(size, size);
	} else {
		do {
			size = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
		}
		while (size < 5 || size > 64);
		setupUI(size, size);
	}
}
resizeGrid.addEventListener('click', resizeContent);