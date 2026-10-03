document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 50));

            const update = () => {

                count += increment;

                if (count >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                }

            };

            update();

            observer.unobserve(counter);

        });

    }, { threshold: 0.4 });

    counters.forEach(counter => observer.observe(counter));

});