let grid = document.querySelector(".grid");
let squareDiv;

// Default grid size when the webpage is loaded is 16x16:
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        squareDiv = document.createElement("div");
        squareDiv.id = "square";
        grid.appendChild(squareDiv);
        squareDiv.addEventListener("mousemove", colorSquare);
    }
}

function removeGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

function createGrid() {
    grid = document.querySelector(".grid");

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            squareDiv = document.createElement("div");
            squareDiv.id = "square";
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("mousemove", colorSquare);
        }
    }
}

function colorSquare(event) {
    event.target.style.backgroundColor = "grey";
}


const changeButton = document.querySelector("#changeButton");

// function changeButtonClick(event) {


// }

// changeButton.addEventListener("click", changeButtonClick);
