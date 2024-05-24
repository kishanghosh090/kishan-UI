let menuicon = document.querySelector("#menu-icon")
let resmenu = document.querySelector(".res-menu")
let opacity = document.querySelector(".opacity2")

menuicon.addEventListener("click", () => {
    resmenu.classList.toggle("res-menu")
    opacity.classList.toggle("opacity2")
})