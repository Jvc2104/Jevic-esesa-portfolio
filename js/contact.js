/* =====================================================
   JEVIC ESESA PORTFOLIO
   CONTACT PAGE JS
===================================================== */



document.addEventListener("DOMContentLoaded",()=>{



/* ===============================
   GSAP INITIALISATION
================================ */


gsap.registerPlugin(ScrollTrigger);





/* ===============================
   HERO ANIMATION
================================ */


const hero = gsap.timeline();



hero

.from(".contact-title span",{

    opacity:0,

    y:40,

    duration:1

})


.from(".contact-title h1",{

    opacity:0,

    y:80,

    duration:1.2

},"-=0.5")



.from(".contact-title p",{

    opacity:0,

    y:40,

    duration:1

},"-=0.7");








/* ===============================
   SCROLL REVEAL
================================ */


const revealElements = document.querySelectorAll(
".reveal, .contact-form, .contact-info, .info-box, .social-grid a"
);



revealElements.forEach(element=>{


gsap.from(element,{

    opacity:0,

    y:60,

    duration:1,

    scrollTrigger:{


        trigger:element,


        start:"top 85%",


        toggleActions:"play none none reverse"


    }


});


});







/* ===============================
   FORM EFFECT
================================ */


const inputs = document.querySelectorAll(
".input-group input, .input-group textarea"
);



inputs.forEach(input=>{


input.addEventListener("focus",()=>{


gsap.to(input,{

    scale:1.02,

    duration:.3

});


});




input.addEventListener("blur",()=>{


gsap.to(input,{

    scale:1,

    duration:.3

});


});


});







/* ===============================
   FORM VALIDATION
================================ */


const form=document.querySelector("form");



form.addEventListener("submit",(e)=>{


e.preventDefault();



const fields=form.querySelectorAll(
"input, textarea"
);



let valid=true;



fields.forEach(field=>{


if(field.value.trim()===""){


field.style.borderColor="#ff6b00";

valid=false;


}

else{


field.style.borderColor=
"rgba(255,255,255,.12)";


}


});





if(valid){



const button=form.querySelector("button");



button.innerHTML=

"Message envoyé ✓";



button.style.background="#16a34a";



setTimeout(()=>{


button.innerHTML=

`Envoyer le message 
<i class="fa-solid fa-arrow-right"></i>`;



button.style.background="#ff6b00";


form.reset();



},3000);



}



});









/* ===============================
   SOCIAL HOVER
================================ */


const socials=document.querySelectorAll(
".social-grid a"
);



socials.forEach(item=>{


item.addEventListener("mouseenter",()=>{


gsap.to(item,{

    y:-10,

    duration:.3

});


});



item.addEventListener("mouseleave",()=>{


gsap.to(item,{

    y:0,

    duration:.3

});


});


});









/* ===============================
   CURSEUR CREATIF
================================ */


const cursor=document.querySelector(".cursor");

const follower=document.querySelector(".cursor-follower");



if(cursor && follower){



document.addEventListener("mousemove",(e)=>{


gsap.to(cursor,{

x:e.clientX,

y:e.clientY,

duration:.1

});



gsap.to(follower,{

x:e.clientX,

y:e.clientY,

duration:.5

});


});





const hoverElements=document.querySelectorAll(
"a, button, input, textarea"
);



hoverElements.forEach(el=>{


el.addEventListener("mouseenter",()=>{


gsap.to(follower,{

scale:1.7,

borderColor:"#ff6b00"

});


});




el.addEventListener("mouseleave",()=>{


gsap.to(follower,{

scale:1,

borderColor:"#ffffff"

});


});


});



}







/* ===============================
   SMOOTH SCROLL
================================ */



if(typeof Lenis !== "undefined"){



const lenis=new Lenis({

duration:1.2

});



function animation(time){

lenis.raf(time);

requestAnimationFrame(animation);

}


requestAnimationFrame(animation);



}



});