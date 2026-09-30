/**
 * ============================================
 * HS Portfolio - Navbar
 * Author: MD. Khaled Hassan
 * ============================================
 */

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    /**
     * Sticky Navbar
     */
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    /**
     * Active Navigation Link
     */
    function setActiveLink() {
        let currentSection = "";

        document.querySelectorAll("section[id]").forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    /**
     * Close Mobile Menu
     */
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                menuToggle.click();
            }
        });
    });

    /**
     * Window Events
     */
    window.addEventListener("scroll", () => {
        handleScroll();
        setActiveLink();
    });

    /**
     * Initial Load
     */
    handleScroll();
    setActiveLink();
});