/*==================================================
  JEVIC ESESA PORTFOLIO
  MAIN.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      MENU MOBILE
    =========================================*/
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });

        document.querySelectorAll("#navMenu a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.classList.remove("menu-open");

            });

        });

    }

    /*=========================================
      HEADER AU SCROLL
    =========================================*/
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*=========================================
      BOUTON RETOUR EN HAUT
    =========================================*/
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /*=========================================
      ANIMATION AU SCROLL
    =========================================*/
    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < trigger) {

                element.classList.add("active");

            }

        });

    }

    revealElements();

    window.addEventListener("scroll", revealElements);

    /*=========================================
      LIENS AVEC SCROLL FLUIDE
    =========================================*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});