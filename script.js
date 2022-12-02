let menu = document.querySelector('#menu-bars')
let middle = document.querySelector('.middle')


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    middle.classList.toggle('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
