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

function chooseRandomRGB() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    console.log(`rgb(${r},${g},${b})`);
    return `rgb(${r},${g},${b})`
}

// Apply hover effects
container.addEventListener("mouseover", (e) => {
    if (e.target.id.substr(0,3) === "box") {
    let hoveredBox = document.querySelector(`#${e.target.id}`);
    hoveredBox.style.backgroundColor = `${chooseRandomRGB()}`;
    }
})


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

