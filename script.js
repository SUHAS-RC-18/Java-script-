```javascript
// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    // Open and close the mobile navigation menu
    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });


    // Close the menu after clicking a navigation link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        });

    });


    // Close the mobile menu when switching to desktop view
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        }

    });

}


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const copyright = document.getElementById("copyright");

if (copyright) {

    copyright.textContent =
        "© " +
        new Date().getFullYear() +
        " Suhas R C. All Rights Reserved.";

}
```
