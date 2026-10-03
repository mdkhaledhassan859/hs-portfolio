/*==================================================
    Projects Page
    MD. Khaled Hassan Portfolio
==================================================*/

"use strict";

/*=====================================
        DOM Ready
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    initProjectFilter();

    initScrollReveal();

    initCounterAnimation();

    initNavbar();

    initBackToTop();

});


/*=====================================
        Project Filter
=====================================*/

function initProjectFilter() {

    const buttons = document.querySelectorAll(".filter-btn");

    const cards = document.querySelectorAll(".project-card");

    if (!buttons.length || !cards.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.textContent
                .trim()
                .toLowerCase();

            cards.forEach(card => {

                const category = card.dataset.category || "";

                if (filter === "all") {

                    showCard(card);

                    return;

                }

                if (category.includes(filter)) {

                    showCard(card);

                }

                else {

                    hideCard(card);

                }

            });

        });

    });

}

function showCard(card) {

    card.style.display = "grid";

    requestAnimationFrame(() => {

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    });

}

function hideCard(card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.display = "none";

    }, 250);

}


/*=====================================
        Scroll Reveal
=====================================*/

function initScrollReveal() {

    const elements = document.querySelectorAll(

        ".project-card, .security-card, .stat-card, .cta-box"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: .15

        }

    );

    elements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

}


/*=====================================
        Counter Animation
=====================================*/

function initCounterAnimation() {

    const counters = document.querySelectorAll(".stat-card h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            });

        },

        {

            threshold: .6

        }

    );

    counters.forEach(counter => observer.observe(counter));

}

function animateCounter(counter) {

    const text = counter.textContent.trim();

    const number = parseInt(text);

    if (isNaN(number)) return;

    let current = 0;

    const duration = 1500;

    const step = number / (duration / 16);

    const timer = setInterval(() => {

        current += step;

        if (current >= number) {

            counter.textContent = number + "+";

            clearInterval(timer);

        }

        else {

            counter.textContent = Math.floor(current) + "+";

        }

    }, 16);

}


/*=====================================
        Navbar Shadow
=====================================*/

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("navbar-scrolled");

        }

        else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}


/*=====================================
        Back To Top
=====================================*/

function initBackToTop() {

    const button = document.createElement("button");

    button.className = "back-to-top";

    button.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("active");

        }

        else {

            button.classList.remove("active");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*=====================================
        Footer Year
=====================================*/

const year = document.querySelector("#currentYear");

if (year) {

    year.textContent = new Date().getFullYear();

}