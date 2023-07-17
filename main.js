const burgerIcon = document.getElementById("Burger_menu");
const linksContainer = document.querySelector(".links-container");

console.log(burgerIcon);

burgerIcon.addEventListener("click", () => {
    linksContainer.classList.toggle("unvisible");
})