let grid = document.querySelector(".grid");
let squareDiv;

// Default grid size when the webpage is loaded is 16x16:
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        squareDiv = document.createElement("div");
        squareDiv.className = "square";
        grid.appendChild(squareDiv);
        squareDiv.addEventListener("mouseenter", colorSquare);
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
            squareDiv.addEventListener("mouseenter", colorSquare);
        }
    }
}

let isColorChoiceMode = false;

function colorSquare(event) {
    if (isColorChoiceMode) {
        colorSquareCHOICE(event);
    }
    else {
        colorSquareDEFAULT(event);
    }

    if (isToggleOn)
        addSquareOpacity(event);
}

function colorSquareDEFAULT(event) {
    event.target.style.backgroundColor = getRandomRGB();
}

function getRandomRGB() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    return `rgb(${R}, ${G}, ${B})`;
}

function addSquareOpacity(event) {
    event.target.style.opacity = (parseFloat(event.target.style.opacity) || 0) + 0.1;
}

function colorSquareCHOICE(event) {
    event.target.style.backgroundColor = colorInput.value;
}

const changeColorButton = document.querySelector("#changeColorButton");
let colorInput = document.querySelector("#colorInput");

function colorButtonClick() {
    colorInput.click();
}

changeColorButton.addEventListener("click", colorButtonClick);

colorInput.addEventListener("input", (event) => {
    isColorChoiceMode = true;
});

// Change Grid Size:

function isInputValid(userInput) {
    while (true) {
        // Cancel
        if (userInput === null) {
            alert("Cancelled - not changing grid size");
            return false;
        }

        // Empty input
        while (userInput.trim() === "") {
            userInput = prompt("You didn't input any value - please input a number, or if you wish to cancel, hit 'Cancel'");
            if (userInput === null) {
                alert("Cancelled - not changing grid size");
                return false;
            }
        }

        // Validate cases in which a user presses "OK" without any input, or when a user presses "Cancel" to back out of the prompt
        // It is done before the conversion of the String userInput to a Number type variable, since a blank string or null will turn into 0 in that case, so we can't differentiate from an actual 0



        // Convert to number
        userInput = Number(userInput);

        // Not a number
        if (isNaN(userInput)) {
            userInput = prompt("Invalid - please enter a *number* using digits");
            continue;
        }

        // Out of range
        if (userInput <= 0) {
            userInput = prompt("Invalid - please enter a *positive* number greater than 0");
            continue;
        }

        if (userInput > 100) {
            userInput = prompt("Invalid - please input a positive number that *isn't* greater than 100");
            continue;
        }

        // If all checks pass, the function returns the valid input as a NUMBER
        return userInput;
    }
}

const changeGridButton = document.querySelector("#changeGridButton");

function changeButtonClick() {
    let userInput = prompt("Enter a positive number of squares per row/column (max 100):")

    const validInput = isInputValid(userInput);

    // Only execute the following when the input is valid:
    if (validInput === false) return; // break here so we don't create an invalid grid, otherwise continue executing the rest of the code

    removeGrid();
    createGrid(validInput);

    const gridSize = document.querySelector(".currentGridSize");
    let gridSizeTextUpdate = gridSize.querySelector("span");
    gridSizeTextUpdate.textContent = `${validInput}x${validInput}`;

    const flexBasisPercent = 100 / validInput; // 100 divided by how many squares the user wants, such so the flex basis is scaled appropriately.
    document.querySelectorAll(".square").forEach(square => {
        square.style.flexBasis = `${flexBasisPercent}%`;
    });

}

changeGridButton.addEventListener("click", changeButtonClick);

//

// Toggle Opacity Strokes:

const toggleOpacityButton = document.querySelector("#toggleOpacityButton");

let isToggleOn = false;
function opacityButtonClick() {
    if (!isToggleOn) {
        isToggleOn = true;
        toggleOpacityButton.textContent = "Toggle Opacity Stroke Tool: ON";
        toggleOpacityButton.style.backgroundColor = "#006400";
    }
    else {
        isToggleOn = false;
        toggleOpacityButton.textContent = "Toggle Opacity Stroke Tool: OFF";
        toggleOpacityButton.style.backgroundColor = "#c00000";
    }
    console.log(isToggleOn);
    return isToggleOn;
}

toggleOpacityButton.addEventListener("click", opacityButtonClick);