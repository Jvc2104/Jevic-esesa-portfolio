/* =====================================================
   JEVIC ESESA PORTFOLIO JAVASCRIPT
===================================================== */



// ================= MENU MOBILE =================


const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");



if(menuToggle){


menuToggle.addEventListener("click",()=>{


    nav.classList.toggle("active");


    menuToggle.classList.toggle("open");


});


}







// ================= FERMETURE MENU AU CLIC =================


const navLinks = document.querySelectorAll(".nav a");



navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});








// ================= ANIMATION AU SCROLL =================



const observerOptions = {


    threshold:0.15


};



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},observerOptions);






const animatedElements = document.querySelectorAll(

".skill-card, .project-card, .logo-card, .web-card, .process-card"

);



animatedElements.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});








// ================= APPARITION DES CARTES =================



const style = document.createElement("style");


style.innerHTML = `


.hidden{


opacity:0;

transform:translateY(50px);

transition:

opacity .8s ease,

transform .8s ease;


}




.show{


opacity:1;

transform:translateY(0);


}



`;



document.head.appendChild(style);









// ================= ANIMATION LOGOS =================



const logos = document.querySelectorAll(".logo-card");



logos.forEach((logo,index)=>{


    logo.style.animationDelay = `${index * 0.5}s`;



});









// ================= SMOOTH SCROLL =================



document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{


anchor.addEventListener("click",function(e){



const target = document.querySelector(

this.getAttribute("href")

);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});



});









// ================= BOUTON RETOUR EN HAUT =================



const topButton = document.createElement("button");


topButton.className="back-top";


topButton.innerHTML=

'<i class="fa-solid fa-arrow-up"></i>';



document.body.appendChild(topButton);






window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


topButton.classList.add("visible");


}

else{


topButton.classList.remove("visible");


}



});






topButton.addEventListener("click",()=>{


window.scrollTo({


top:0,

behavior:"smooth"


});


});









// ================= LAZY LOADING IMAGES =================



const images = document.querySelectorAll("img");



images.forEach(img=>{


img.loading="lazy";


});









console.log(

"Portfolio Jevic Esesa chargé avec succès"

);