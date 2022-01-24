const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
const DEFAULT_COLOR = '#333333';



const grid = document.getElementById("grid-container");
function setMode(){

}
function createGrid(size){
    for(let r = 1; r <= size; r++){
        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row); 
        for(let c =1; c <= size;c++){
            col = document.createElement("div");
            col.className = "col";
            col.addEventListener('mouseover',changeColor)
            row.appendChild(col);
        }   
    }
}

function remakeGrid(){
    let gridRow = document.getElementsByClassName("row");
    let gridCol = document.getElementsByClassName("col");
    while(gridCol.length != 0){ //while loop makes sure all col are removed

    for(let i = 0; i < gridCol.length; i++)//remove columns
        gridCol[i].remove();
    for(let i=0; i< gridRow.length;i++)//then remove remaining row
        gridRow[i].remove();
    gridRow = document.getElementsByClassName("row");
    gridCol = document.getElementsByClassName("col");
    }
    createGrid(range.value);
    rangeDiv.innerText = range.value;
}

function changeColor(e){
    if(currentMode === "color")
        e.target.style.backgroundColor = currentColor;
    else if(currentMode === "eraser")
        e.target.style.backgroundColor = "white";
}

function clearGrid(){
    let gridRow = document.getElementsByClassName("row");
    let gridCol = document.getElementsByClassName("col");
    for(let i=0; i <gridCol.length; i++)
        gridCol[i].style.backgroundColor = "white";
    
}

let range = document.getElementById("slider");
let rangeDiv = document.getElementById("rangeValue");
let colorBtn = document.getElementById("colorBtn");
let eraserBtn = document.getElementById("eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let colorChoice = document.getElementById("colorIn");

let gridSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

createGrid(gridSize);

colorChoice.addEventListener("change", () =>currentColor = colorChoice.value);
colorBtn.addEventListener("click", () => currentMode = "color");
eraserBtn.addEventListener("click", () => currentMode = "eraser");
clearBtn.addEventListener("click", () => clearGrid());
range.addEventListener("mouseup", () => remakeGrid());





