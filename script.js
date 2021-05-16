const container = document.querySelector('.container') 
const gridContainer = document.querySelector('#grid-container')


function createDivs(col,rows) { 
    for(let i = 0; i < (col * rows); i++) { 
    const element = document.createElement('div'); 
    gridContainer.style.gridTemplateColumns = `repeat(${col},1fr)`; 
    gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
    gridContainer.appendChild(element).classList.add('box') } 

} 
createDivs(16,16);

//element.addEventListener("mouseover",event);//

function randomColor () {

}