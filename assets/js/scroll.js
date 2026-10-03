/**
 * ==========================
 * Scroll Reveal Animation
 * ==========================
 */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry, index) => {

                if(entry.isIntersecting){

                    setTimeout(() => {

                        entry.target.classList.add("active");

                    }, index * 120);

                    observer.unobserve(entry.target);

                }

            });

    },{

        threshold:.15

    });

    elements.forEach(el => observer.observe(el));

});