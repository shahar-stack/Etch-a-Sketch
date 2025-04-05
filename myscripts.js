const gridContainer = document.querySelector(".container");
let squareDiv;

function createGrid() {
    
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            squareDiv = document.createElement("div");
            squareDiv.id = "square";
            gridContainer.appendChild(squareDiv);
            squareDiv.addEventListener("mousemove", colorSquare);
        }
    }
}


function colorSquare(event) {
    // squareDiv.style.backgroundColor = "black";
    event.target.style.backgroundColor = "black";
}

createGrid();