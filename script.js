document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    // Create hamburger button
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "menu-toggle";
    toggleBtn.innerHTML = "☰";

    // Insert button after the .name div
    const nameDiv = navbar.querySelector(".name");
    if (nameDiv) {
      nameDiv.insertAdjacentElement("afterend", toggleBtn);
    }

    // Toggle nav open/close
    const nav = navbar.querySelector("nav");
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }
});
