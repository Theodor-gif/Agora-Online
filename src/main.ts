const openMenuBtn: HTMLElement | null =
  document.getElementById("nav-secondary-btn");

const secondaryMenu: HTMLElement | null = document.getElementById(
  "navigation-container-secondary",
);

const closeMenuBtn: HTMLElement | null =
  document.getElementById("close-nav-btn");

openMenuBtn?.addEventListener("click", () => {
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

closeMenuBtn?.addEventListener("click", () => {
  if (secondaryMenu) {
    secondaryMenu.style.display = "none";
  }
});
