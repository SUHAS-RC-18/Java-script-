// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// ================= CLOSE MENU AFTER CLICK =================

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// ================= CURRENT YEAR =================

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        "© " + new Date().getFullYear() +
        " Suhas R C. All Rights Reserved.";
}
