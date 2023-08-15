console.log("Your index.js file loaded correct!")

const linkedinButton = document.querySelector(".linkedin");

linkedinButton.addEventListener("mouseenter", 
    () => {
    linkedinButton.classList.add("hovered");
});

linkedinButton.addEventListener("mouseout", 
    () => {
    linkedinButton.classList.remove("hovered");
});