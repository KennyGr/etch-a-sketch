const grid = document.querySelector("#grid");
const resetButton = document.querySelector("#resetButton")
const clearButton = document.querySelector("#clearButton")
const randomColorButton = document.querySelector("#randomColorButton")
const colorSelector = document.querySelector("#colorSelector")

let resetLabel = document.querySelector("#resetLabel")
let totalPixels = 16;
let newPixels = 0;
let mainColor = "rgb(26, 26, 26)"

let randomColors = false;

divCreator(totalPixels);

const container = document.querySelectorAll('.container');

const innerSquare = document.querySelectorAll(".innerSquare")

resetButton.addEventListener("input", reset);
clearButton.addEventListener("click", clear);
randomColorButton.addEventListener("click", switchColors);
colorSelector.addEventListener("input", chooseColor);

function chooseColor() {
    mainColor = document.getElementById("colorSelector").value;
}

function switchColors() {
    randomColors = !(randomColors);

    if (randomColors === true) {
        randomColorButton.classList.add('randomColorsActivated');  
    } else if (randomColors === false) {
        randomColorButton.classList.remove('randomColorsActivated');  
    }
};

function reset() {
    let userInput = document.getElementById("resetButton").value;
    deleter();
    divCreator(userInput);

    let horizontalPixels = Math.round(userInput * 1.5);

    resetLabel.textContent = "Resize: " + userInput + " x " + horizontalPixels;
};

function divCreator(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'container');                              
        grid.appendChild(div);

        for (let x = 0; x < num * 1.5; x++) {
            const divChildren = document.createElement('div');
            divChildren.setAttribute("class", "innerSquare");
            divChildren.addEventListener("mouseover", function () {
                if (randomColors === false) {
                    divChildren.classList.add('innerSquareHovered');  
                    divChildren.style.backgroundColor = mainColor
                } else {
                    divChildren.classList.add('innerSquareHoveredRandom');
                    
                    let rgbOne = Math.floor(Math.random() * 255) + 0;
                    let rgbTwo = Math.floor(Math.random() * 255) + 0;
                    let rgbThree = Math.floor(Math.random() * 255) + 0;

                    let randomRGB = "rgb(" + rgbOne + ", " + rgbTwo + ", " + rgbThree + ")";

                    divChildren.style.backgroundColor = randomRGB;
                } 
            }) 
            div.appendChild(divChildren);
        }
    }
};

function deleter() {
    let gridContent = document.querySelector("#grid");
        gridContent.innerHTML = "";
};

function clear() {
    const newInnerSquare = document.querySelectorAll(".innerSquare")
    for (i of newInnerSquare) {
        i.classList.remove("innerSquareHovered");
        i.style.backgroundColor = "rgb(255, 255, 255)";
    };
}
