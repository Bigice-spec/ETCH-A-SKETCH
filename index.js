const container = document.querySelector(".container");
const input = document.querySelector("input");
const reset = document.querySelector("reset");


function colors(){
  let color = '#';
  const random = Math.random().toString(16).slice(2,8);
  color += random;
  return color;
}


//creating 16 * 16 (256) grids 
function grids() {
  for(let i = 0; i < 256; i++){
    const allcontent = document.createElement("content");
    allcontent.classList.add("squares");
    container.appendChild(allcontent);
  }

  container.addEventListener("mouseover", () => {
    const cells = document.getElementsByClassName("squares");
    const cellsArray = Array.from(cells);
    cellsArray.forEach(function(squares) {
      squares.addEventListener("mouseover", function() {
        squares.style.backgroundColor = colors();
        })
    });
});

}

//creating new grids to respond to user input
function newGrids() {
  container.innerHTML = "";
  //styling new container 
  container.style.setProperty("grid-template-columns", `repeat(${input.value}, 2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(${input.value}, 2fr)`);
  
  for(let i = 0; i < input.value * input.value; i++){
    const allcontent = document.createElement("content");
    allcontent.classList.add("squares");
    container.appendChild(allcontent);
  } 

  container.addEventListener("mouseover", () => {
    const cells = document.getElementsByClassName("squares");
    const cellsArray = Array.from(cells);
    cellsArray.forEach(function(squares) {
      squares.addEventListener("mouseover", function() {
        squares.style.backgroundColor = colors();
        })
    });
});
}

//change event
input.addEventListener('change', newGrids);
input.addEventListener('click', newGrids);

grids();
