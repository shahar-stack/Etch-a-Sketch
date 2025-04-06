let grid = document.querySelector(".grid");
let squareDiv;

// Default grid size when the webpage is loaded is 16x16:
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        squareDiv = document.createElement("div");
        squareDiv.className = "square";
        grid.appendChild(squareDiv);
        squareDiv.addEventListener("mousemove", colorSquare);
    }
}

function removeGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

function createGrid(userInput) {
    grid = document.querySelector(".grid");

    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            squareDiv = document.createElement("div");
            squareDiv.className = "square";
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("mousemove", colorSquare);
        }
    }
}

function colorSquare(event) {
    event.target.style.backgroundColor = "grey";
}


const changeButton = document.querySelector("#changeButton");

function changeButtonClick() {
    let userInput = prompt("Enter a positive number of squares per row/column (max 100):")
    userInput = Number(userInput);
    
    let isValidInput = false;
    while (isValidInput === false) {
        if (userInput > 100) {
            userInput = prompt("Invalid - please input a positive number that *isn't* greater than 100");
            userInput = Number(userInput);

        } else if (userInput <= 0) {
            userInput = prompt("Invalid - please enter a *positive* number that's greater than 0");
            userInput = Number(userInput);

        } else if (typeof userInput != "number" || isNaN(userInput)) {
            userInput = prompt("Invalid - please enter a *number* using digits");
            userInput = Number(userInput);

        }
        else {
            isValidInput = true;
            break;
        }
    }

    removeGrid();
    createGrid(userInput);

    const flexBasisPercent = 100/userInput; // 100 divided by how many squares the user wants, such so the flex basis is scaled appropriately.
    document.querySelectorAll(".square").forEach(square => {
        square.style.flexBasis = `${flexBasisPercent}%`;
    });
}

changeButton.addEventListener("click", changeButtonClick);
