const inputBox = document.getElementById("input-box");
const changeBtn = document.getElementById("btn");
const titleObj = document.querySelector("title");

// Changes the title
const changeTitle = () => {
    titleObj.innerHTML = inputBox.value;
    inputBox.value = ""; // Clearing the box at the end
}

// Event listeners
changeBtn.addEventListener("click", changeTitle);
inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        changeTitle();
    }
});

