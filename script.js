```javascript
// ================= MOBILE NAVIGATION =================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);

    });

}


// ================= CLOSE MENU AFTER CLICK =================

if (navLinks && menuButton) {

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

        });

    });

}


// ================= AUTOMATIC FOOTER YEAR =================

const copyright = document.getElementById("copyright");

if (copyright) {

    copyright.textContent =
        "© " + new Date().getFullYear() +
        " Suhas R C. All Rights Reserved.";

}
```
