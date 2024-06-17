let container = document.querySelector("container");
let gridNumber = 4;

function drawBoard(gridNumber) {
    let id = 1;
    for (let i = 0; i < gridNumber; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        for (let i = 0; i < 4; i++) {
            let childDiv = document.createElement("div");
            childDiv.classList.add("child");
            childDiv.id = `box${id}`;
            id++;
            div.appendChild(childDiv);
        } container.appendChild(div);   
    }}

function deleteBoard() {
    let boxes =
}

// Apply hover effects
container.addEventListener("mouseover", (e) => {
    if (e.target.id.substr(0,3) === "box") {
    let hoveredBox = document.querySelector(`#${e.target.id}`);
    hoveredBox.style.backgroundColor = "red";}
})


drawBoard(gridNumber);

let gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", () => {
    let keepGoing = true;
    while (keepGoing === true) {
        gridNumber = Number(prompt("How many rows do you want? (Maximum 30)"));
        if (typeof(gridNumber) === "number"
            && gridNumber <= 30) {
                return drawBoard(gridNumber);
        } else {
            alert("ERROR");
        }
    }})

