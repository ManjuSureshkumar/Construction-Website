/* ===== TESTIMONIAL REVIEW ========= */
const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dots span");
const next = document.querySelectorAll(".arrow")[1];
const prev = document.querySelectorAll(".arrow")[0];

let index = 0;

function showSlide(i){

cards.forEach(card => card.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

cards[i].classList.add("active");
dots[i].classList.add("active");

}

next.onclick = () => {
index++;
if(index >= cards.length) index = 0;
showSlide(index);
};

prev.onclick = () => {
index--;
if(index < 0) index = cards.length - 1;
showSlide(index);
};

/* AUTO SLIDE EVERY 3 SEC */

setInterval(()=>{
index++;
if(index >= cards.length) index = 0;
showSlide(index);
},3000);