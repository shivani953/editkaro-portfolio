// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Navbar Shadow on Scroll

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#000";

    }
    else{

        navbar.style.background = "rgba(0,0,0,0.8)";

    }

});


// Hero Animation

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }

});

