const container = document.querySelector('.container') 
const gridContainer = document.querySelector('#grid-container'); 
const clearGrid = document.querySelector('#clear-grid');

function createDivs(col,rows) {
     for(let i = 0; i < (col * rows); i++) { 
        const element = document.createElement('div'); 
        gridContainer.style.gridTemplateColumns = `repeat(${col},1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`; 
        gridContainer.appendChild(element).classList.add('box') } 
   
   
 } 
    
createDivs(16,16); 


 const box = document.querySelectorAll('.box'); 
    box.forEach(function(box) { 
    box.addEventListener('mouseenter',function() { 
    this.style.backgroundColor ='#ff9999'; }); 
}); 

   function clearcontent(){
      document.querySelectorAll('.box');
      box.forEach(function(box) {
      box.style.backgroundColor = 'antiquewhite';});
      }

   clearGrid.addEventListener('click',clearcontent);