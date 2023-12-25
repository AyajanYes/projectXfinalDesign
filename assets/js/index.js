/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId, burgerId, closeId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  burger = document.getElementById(burgerId),
  close = document.getElementById(closeId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
          if(burger.style.display == 'none') {
            burger.style.display = 'block'
            close.style.display = 'none'
          } else {
            close.style.display = 'block'
            burger.style.display = 'none'
          }
      })
  }
}
showMenu('nav-toggle','nav-menu', 'nav-burger', 'nav-close')

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 200) {
    nav.classList.add('scroll-header');
    nav.classList.remove('unscroll-header');
  } 
  else {
    nav.classList.remove('scroll-header');
    nav.classList.add('unscroll-header');
  }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: true,
});

sr.reveal(`.package__data,
           .aboutUs__data, .benefits__data`,  {
  origin: 'top',
  interval: 200,
})

sr.reveal(`.card-wrapper`, {
  origin: 'left'
})

var swiper = new Swiper(".slide-content", {
  effect: 'cards',
  loop: true,
  centerSlides: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== MODAL WINDOW ====================*/

const feedback = document.querySelector('#feedback')
const feedbackClose = document.querySelector('#feedback-close')
const main = document.querySelector('#main')

main.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'A';
  if (isButton) {
    feedback.style.display = 'block'
  } 
  else return;
})

feedbackClose.addEventListener('click', () => {
  console.log('hellllooooo')
  feedback.style.display = 'none'
})

window.onclick = function(event) {
  if (event.target == feedback) {
    feedback.style.display = "none";
  }
}

/*==================== PHONE ====================*/
const phoneInputField = document.querySelector("#phone");
   const phoneInputCountry = window.intlTelInput(phoneInputField, {
    separateDialCode: true,
    initialCountry: "KZ",
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });


const userName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const form = document.querySelector("#form");
const errorEl = document.getElementById("error");

form.addEventListener('submit', (e) => {
  if(userName.value === '' || userName.value == null) {
    e.preventDefault()
  }
}) 


