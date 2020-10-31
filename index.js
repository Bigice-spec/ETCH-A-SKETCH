const container = document.querySelector(".container");
const input = document.querySelector("input");
const reset = document.querySelector("reset");




//creating 16 * 16 (256) grids 
function grids() {
  for(let i = 0; i < 256; i++){
    const content = document.createElement("content");
    content.classList.add("squares");
    container.appendChild(content);
  } 
}

//creating new grids to respond to user input
function newGrids() {
  container.innerHTML = "";
  //styling new container 
  container.style.setProperty("grid-template-columns", `repeat(${input.value}, 2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(${input.value}, 2fr)`);
  
  for(let i = 0; i < input.value * input.value; i++){
    const content = document.createElement("content");
    content.classList.add("squares");
    container.appendChild(content);
  } 
}


//change event
input.addEventListener('change', newGrids);
input.addEventListener('click', newGrids);

grids();
