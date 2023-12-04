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

sr.reveal(`.package__data, .feedback__container,
           .aboutUs__data`, {
  origin: 'top',
  interval: 200,
})

sr.reveal(`.home__data`, {
  origin: 'left'
})

sr.reveal(`.home__img`, {
  origin: 'right'
})

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
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

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});