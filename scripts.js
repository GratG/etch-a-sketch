const DEFAULT_SIZE = 16;



const grid = document.getElementById("grid-container");

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
    e.target.style.backgroundColor = "black";
}
function clearGrid(){
    let gridRow = document.getElementsByClassName("row");
    let gridCol = document.getElementsByClassName("col");
    for(let i=0; i <gridCol.length; i++)
        gridCol[i].style.backgroundColor = "white";
    
}

let range = document.getElementById("slider");
let rangeDiv = document.getElementById("rangeValue");

let clearBtn = document.getElementById("clearBtn");
let gridSize = DEFAULT_SIZE;

createGrid(gridSize);

range.addEventListener("mouseup", () => remakeGrid());
clearBtn.addEventListener("click", () => clearGrid());




