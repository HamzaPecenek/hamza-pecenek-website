document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const existingToggle = navbar.querySelector(".menu-toggle");
  if (!existingToggle) {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "menu-toggle";
    toggleBtn.setAttribute("aria-label", "Toggle navigation");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.innerHTML = "☰";

    const nameDiv = navbar.querySelector(".name");
    if (nameDiv) {
      nameDiv.insertAdjacentElement("afterend", toggleBtn);
    }

    const nav = navbar.querySelector("nav");
    if (nav) {
      toggleBtn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav-open");
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
      });
    }
  }
});
