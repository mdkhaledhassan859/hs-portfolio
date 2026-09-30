/*==================================================
    CASE STUDY
    MD. Khaled Hassan Portfolio
==================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initReadingProgress();

    initScrollReveal();

    initCounter();

    initSmoothScroll();

    initBackToTop();

    initParallax();

    initGallery();

});

/*=====================================
        Sticky Navbar
=====================================*/

function initNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            navbar.classList.add("navbar-scrolled");

        }else{

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

/*=====================================
        Reading Progress
=====================================*/

function initReadingProgress(){

    const progress=document.querySelector(".reading-progress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const percent=(window.scrollY/total)*100;

        progress.style.width=percent+"%";

    });

}

/*=====================================
        Scroll Reveal
=====================================*/

function initScrollReveal(){

    const items=document.querySelectorAll(".reveal");

    if(!items.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.15

    });

    items.forEach(item=>observer.observe(item));

}

/*=====================================
        Counter Animation
=====================================*/

function initCounter(){

    const counters=document.querySelectorAll("[data-counter]");

    if(!counters.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(counter){

    const target=parseInt(counter.dataset.counter);

    const suffix=counter.dataset.suffix || "";

    let current=0;

    const increment=target/80;

    const timer=setInterval(()=>{

        current+=increment;

        if(current>=target){

            counter.textContent=target+suffix;

            clearInterval(timer);

        }else{

            counter.textContent=Math.floor(current)+suffix;

        }

    },20);

}

/*=====================================
        Smooth Scroll
=====================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

}
/*=====================================
        Back To Top
=====================================*/

function initBackToTop(){

    const button=document.querySelector(".back-to-top");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("active");

        }else{

            button.classList.remove("active");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*=====================================
        Hero Parallax
=====================================*/

function initParallax(){

    const image=document.querySelector(".hero-image");

    if(!image) return;

    window.addEventListener("scroll",()=>{

        const offset=window.pageYOffset;

        image.style.transform=`translateY(${offset*0.15}px)`;

    });

}


/*=====================================
        Active Navigation
=====================================*/

function initActiveNavigation(){

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll(".navbar .nav-link");

    if(!sections.length || !navLinks.length) return;

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;
            const height=section.offsetHeight;

            if(window.scrollY>=top &&
               window.scrollY<top+height){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}


/*=====================================
        Gallery Lightbox
=====================================*/

function initGallery(){

    const images=document.querySelectorAll(".gallery-item img");

    if(!images.length) return;

    const overlay=document.createElement("div");

    overlay.className="lightbox-overlay";

    overlay.innerHTML=`

        <span class="lightbox-close">&times;</span>

        <img class="lightbox-image" src="" alt="">

    `;

    document.body.appendChild(overlay);

    const preview=overlay.querySelector(".lightbox-image");

    const close=overlay.querySelector(".lightbox-close");

    images.forEach(img=>{

        img.addEventListener("click",()=>{

            preview.src=img.src;

            overlay.classList.add("show");

            document.body.style.overflow="hidden";

        });

    });

    close.addEventListener("click",()=>{

        overlay.classList.remove("show");

        document.body.style.overflow="";

    });

    overlay.addEventListener("click",(e)=>{

        if(e.target===overlay){

            overlay.classList.remove("show");

            document.body.style.overflow="";

        }

    });

}


/*=====================================
        Page Entrance
=====================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*=====================================
        Lazy Loading
=====================================*/

const lazyImages=document.querySelectorAll("img[data-src]");

if(lazyImages.length){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img=entry.target;

                img.src=img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    lazyImages.forEach(img=>observer.observe(img));

}


/*=====================================
        Mouse Glow Effect
=====================================*/

document.addEventListener("mousemove",(e)=>{

    const glow=document.querySelector(".mouse-glow");

    if(!glow) return;

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/*=====================================
        Initialize Remaining Features
=====================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initActiveNavigation();

});