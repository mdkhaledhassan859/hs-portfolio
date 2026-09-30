/**
 * ============================================
 * HS Portfolio - Theme Toggle
 * Author: MD. Khaled Hassan
 * ============================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeButton.querySelector("i");

    const STORAGE_KEY = "hs-portfolio-theme";

    /**
     * Apply Theme
     */
    function applyTheme(theme) {

        body.setAttribute("data-theme", theme);

        if (theme === "light") {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    }

    /**
     * Load Saved Theme
     */
    const savedTheme = localStorage.getItem(STORAGE_KEY) || "dark";

    applyTheme(savedTheme);

    /**
     * Toggle Theme
     */
    themeButton.addEventListener("click", () => {

        const currentTheme = body.getAttribute("data-theme");

        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        applyTheme(newTheme);

        localStorage.setItem(STORAGE_KEY, newTheme);

    });

});