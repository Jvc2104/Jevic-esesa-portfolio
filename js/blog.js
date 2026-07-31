/* =====================================================
   JEVIC ESESA PORTFOLIO
   JOURNAL CREATIF - BLOG JS
===================================================== */


/* ===============================
   INITIALISATION
================================ */


document.addEventListener("DOMContentLoaded",()=>{


/* ===============================
   LENIS SMOOTH SCROLL
================================ */


const lenis = new Lenis({

    duration:1.2,

    smooth:true,

});


function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}


requestAnimationFrame(raf);





/* ===============================
   GSAP CONFIG
================================ */


gsap.registerPlugin(ScrollTrigger);







/* ===============================
   HERO ANIMATION
================================ */


const heroTimeline = gsap.timeline();



heroTimeline


.from(".hero-label",{

    opacity:0,

    y:40,

    duration:1

})


.from(".hero-title",{

    opacity:0,

    y:80,

    duration:1.2

},"-=0.5")


.from(".hero-content p",{

    opacity:0,

    y:40,

},"-=0.7")


.from(".hero-professions span",{

    opacity:0,

    y:30,

    stagger:.15,

},"-=0.5")


.from(".hero-image",{

    opacity:0,

    x:100,

    duration:1.5

},"-=1");







/* ===============================
   HERO IMAGE PARALLAX
================================ */



gsap.to(".hero-image img",{

    y:80,

    scrollTrigger:{

        trigger:".journal-hero",

        start:"top top",

        scrub:true

    }

});







/* ===============================
   REVEAL SECTIONS
================================ */


const revealElements=document.querySelectorAll(

".featured-card, .creative-item, .video-card, .timeline-item, .review-card, .faq-box"

);



revealElements.forEach((element)=>{


gsap.from(element,{

    opacity:0,

    y:70,

    duration:1,

    scrollTrigger:{


        trigger:element,


        start:"top 85%",


        toggleActions:"play none none reverse"


    }


});


});









/* ===============================
   COUNTERS
================================ */



const counters=document.querySelectorAll(

".stat-item strong"

);



counters.forEach(counter=>{


const target = Number(

counter.dataset.number

);



ScrollTrigger.create({


trigger:counter,


start:"top 85%",



once:true,



onEnter:()=>{


let current=0;


const interval=setInterval(()=>{


current++;


counter.textContent=current;



if(current>=target){


clearInterval(interval);


}



},40);



}


});


});










/* ===============================
   SWIPER TESTIMONIAL
================================ */


new Swiper(".testimonial-slider",{


loop:true,


spaceBetween:30,


autoplay:{


delay:4000,


disableOnInteraction:false


},



pagination:{


el:".swiper-pagination",


clickable:true


},



breakpoints:{


768:{


slidesPerView:1


},



1024:{


slidesPerView:1


}


}


});










/* ===============================
   FAQ
================================ */


const faqButtons=document.querySelectorAll(".faq-btn");



faqButtons.forEach(button=>{


button.addEventListener("click",()=>{


const box=button.parentElement;



document.querySelectorAll(".faq-box")

.forEach(item=>{


if(item!==box){


item.classList.remove("active");


}


});



box.classList.toggle("active");



});


});










/* ===============================
   HOVER IMAGE EFFECT
================================ */


document.querySelectorAll(

".creative-item, .video-card"

)

.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect=card.getBoundingClientRect();


const x=e.clientX-rect.left;


const y=e.clientY-rect.top;



const rotateX=

((y-rect.height/2)/20);



const rotateY=

((x-rect.width/2)/-20);



gsap.to(card,{


rotateX,


rotateY,


duration:.3,


ease:"power2.out"


});



});





card.addEventListener("mouseleave",()=>{


gsap.to(card,{


rotateX:0,


rotateY:0,


duration:.5


});



});



});









/* ===============================
   BACK TO TOP
================================ */


const backTop=document.createElement("button");


backTop.className="back-top";


backTop.innerHTML=

'<i class="fa-solid fa-arrow-up"></i>';



document.body.appendChild(backTop);





window.addEventListener("scroll",()=>{


if(window.scrollY>600){


backTop.classList.add("visible");


}

else{


backTop.classList.remove("visible");


}


});





backTop.addEventListener("click",()=>{


lenis.scrollTo(0);


});







/* ===============================
   IMAGE LAZY LOADING
================================ */


document.querySelectorAll("img")

.forEach(img=>{


img.loading="lazy";


});



});