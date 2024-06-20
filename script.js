let container = document.querySelector("#container");
let gridNumber = 4;

function drawBoard(gridNumber) {
    let id = 1;
    for (let i = 0; i < gridNumber; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        for (let i = 0; i < gridNumber; i++) {
            let childDiv = document.createElement("div");
            childDiv.classList.add("child");
            childDiv.id = `box${id}`;
            id++;
            div.appendChild(childDiv);
        } container.appendChild(div);   
    }}

function deleteBoard() {
    let boxes = document.querySelectorAll(".child");
    let rows = document.querySelectorAll(".row");
    boxes.forEach((currentValue, currentIndex) => {
        boxes[currentIndex].remove();
    }) 
    rows.forEach((currentValue, currentIndex) => {
        rows[currentIndex].remove();
    })}

function chooseRandomRGBA(squareOpacity) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let a = "" 
    if (squareOpacity > 0) {
        a = squareOpacity - 0.1;
    } else {
         a = 0;
    }
    console.log(`rgb(${r},${g},${b},${a})`);
    return `rgb(${r},${g},${b},${a})`;
}

// Apply hover effects
container.addEventListener("mouseover", (e) => {
    if (e.target.id.substr(0,3) === "box") {
    let hoveredBox = document.querySelector(`#${e.target.id}`);
    console.log(window.getComputedStyle(hoveredBox).opacity);
    hoveredBox.style.backgroundColor = `${chooseRandomRGBA(window.getComputedStyle(hoveredBox).opacity)}`;
    console.log(window.getComputedStyle(hoveredBox).opacity);
    }})


drawBoard(gridNumber);

let gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", () => {
    let keepGoing = true;
    while (keepGoing === true) {
        gridNumber = Number(prompt("How many rows do you want? (Maximum 100)"));
        if (typeof(gridNumber) === "number"
            && gridNumber <= 100) {
                deleteBoard();
                return drawBoard(gridNumber);
        } else {
            alert("ERROR");
        }}})

