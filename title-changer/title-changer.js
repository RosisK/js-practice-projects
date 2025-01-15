const inputBox = document.getElementById("input-box");
const changeBtn = document.getElementById("btn");
const titleObj = document.querySelector("title");

// 
const changeTitle = () => {
    titleObj.innerHTML = inputBox.value;
}

changeBtn.addEventListener("click", changeTitle);

