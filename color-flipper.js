// HTML Elements
const button = document.querySelector(".click-me");
const input = document.querySelector(".input-box");
const colorFormatSelector = document.querySelector(".color-format");

// Pre-defined list of CSS color names
const colorNames = [
    "black", "white", "red", "blue", "green", "yellow", "purple", "pink", 
    "gray", "orange", "brown", "cyan", "magenta", "lime", "maroon", "navy"
];

// Function to validate color input based on selected format
const validateColor = (color, format) => {
    const hexRegex = /^#?[a-fA-F0-9]{6}|[a-fA-F0-9]{3}$/;
    const rgbRegex = /^rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

    switch(format) {
        case "hex":
            return hexRegex.test(color);
        case "rgb":
            return rgbRegex.test(color);
        case "name":
            return colorNames.includes(color.toLowerCase());
        default:
            return false;
    }
}

// Function to change background color
const changeBg = () => {
    const color = input.value.trim();
    const colorFormat = colorFormatSelector.value;

    if (validateColor(color, colorFormat)) {
        document.body.style.backgroundColor = `${color}`;
    } else {
        alert("Error! The color doesn't match the selected format!");
    }
}

// Event listener for the button
button.addEventListener("click", changeBg);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        changeBg();
    }
});