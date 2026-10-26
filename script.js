
 // Mobile navigation menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Toggle navigation menu");

    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after selecting a navigation link.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        });
    });
}

// Highlight the navigation link for the section currently being viewed.
const sections = document.querySelectorAll("main section, body > section");
const sectionLinks = document.querySelectorAll("#navLinks a");

if ("IntersectionObserver" in window && sections.length && sectionLinks.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            sectionLinks.forEach((link) => {
                const matches = link.getAttribute("href") === `#${entry.target.id}`;
                link.classList.toggle("active", matches);
            });
        });
    }, { rootMargin: "-30% 0px -60% 0px" });

    sections.forEach((section) => observer.observe(section));
}
