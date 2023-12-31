const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', ()=>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});

const Close = ()=>{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click',Close);

//close nav menu  when a menu item is cliqued
if (window.innerWidth < 1024 ) {
  document.querySelectorAll('#nav__items li a').forEach(
    navItem => {
      navItem.addEventListener('click', ()=> {
        Close();
      })
    }
  )

}

//Change Navbar style on scroll

window.addEventListener('scroll', ()=> {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// TESTIMONIALS SECTION(Swiper JS)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      //when window width is >= 600px
      600: {
        slidesPerView : 2
      },
      //when window width is >= 600px
      1024: {
        slidesPerView : 3
      },
    }
  });


