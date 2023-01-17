const bodyElement = document.body;
const navButton = document.querySelector(".toggle-button");
const toggleColors = document.querySelector(".toggle-menu-items");
const toggleColorsAll = document.querySelectorAll(".toggle-menu-items ul li");

navButton.addEventListener("click", function() {
toggleColors.classList.toggle("active");
});

toggleColorsAll.forEach(color => {
    color.addEventListener("click", function () {
        let colorClicked = color.getAttribute("value");
        bodyElement.style.setProperty("background-color", colorClicked);
        toggleColors.classList.toggle("active");

    });
    
    });