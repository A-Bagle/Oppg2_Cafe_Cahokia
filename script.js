const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

document.documentElement.classList.add("js");

function closeNavigation({ returnFocus = false } = {}) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  primaryNavigation.classList.remove("is-open");

  if (returnFocus) {
    menuToggle.focus();
  }
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu",
  );
  primaryNavigation.classList.toggle("is-open", !isExpanded);
});

primaryNavigation.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    closeNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation({ returnFocus: true });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760 && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();