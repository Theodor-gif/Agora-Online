const openMenuBtn = document.getElementById("nav-secondary-btn");
const secondaryMenu = document.getElementById("navigation-container-secondary");
const closeMenuBtn = document.getElementById("close-nav-btn");
openMenuBtn === null || openMenuBtn === void 0 ? void 0 : openMenuBtn.addEventListener("click", () => {
    if (secondaryMenu) {
        if (window.innerWidth < 600) {
            secondaryMenu.style.display = "inline-block";
            secondaryMenu.classList.add("second-nav");
        }
        if (window.innerWidth > 601) {
            secondaryMenu.style.display = "inline-block";
            secondaryMenu.classList.add("second-nav-2");
        }
        if (window.innerWidth > 992) {
            secondaryMenu.style.display = "inline-block";
            secondaryMenu.classList.add("second-nav-3");
        }
    }
});
closeMenuBtn === null || closeMenuBtn === void 0 ? void 0 : closeMenuBtn.addEventListener("click", () => {
    if (secondaryMenu) {
        secondaryMenu.style.display = "none";
    }
});
export {};
//# sourceMappingURL=main.js.map