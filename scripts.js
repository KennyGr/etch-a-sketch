const grid = document.querySelector("#grid");
const resetButton = document.querySelector("#resetButton")
const clearButton = document.querySelector("#clearButton")
let totalPixels = 16;
let newPixels = 0;

divCreator(totalPixels);

const container = document.querySelectorAll('.container');

const innerSquare = document.querySelectorAll(".innerSquare")

resetButton.addEventListener("click", reset);
clearButton.addEventListener("click", clear);

function reset() {
    let userInput = parseInt(prompt("How many pixels would you like? (input will equal height and width)", 64));
    if (userInput != null && (userInput > 0 && userInput < 101)) {
        deleter();
        divCreator(userInput);
    } else {
        alert("Please enter a number greater than 0 and less than 101.");
    } 
};

function divCreator(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'container');                              
        grid.appendChild(div);

        for (let x = 0; x < num; x++) {
            const divChildren = document.createElement('div');
            divChildren.setAttribute("class", "innerSquare");
            divChildren.addEventListener("mouseover", function () {
                divChildren.classList.add('innerSquareHovered');   
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
    };
}