window.addEventListener('scroll', (e) =>{
   const topline = document.querySelectorAll('.line--top'),
         bottomline = document.querySelectorAll('.line--bottom'),
         scrolled = window.pageYOffset,
         rate = scrolled * 0.5,
         heroImage = document.querySelector('.hero__photo');

   topline.forEach(function(line) {
      line.style.transform = 'translate3d(0px,-'+rate+'px, 0)';
   });

   bottomline.forEach(function(line) {
      line.style.transform = 'translate3d(0px,'+rate+'px, 0)';
   });

   heroImage.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+rate+', 0, 1)';
});

const swiper = new Swiper('.swiper', {
   // Optional parameters
   slidesPerView: 3,
   spaceBetween: 20,
   centeredSlides: true,
   grabCursor: true,

 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
     clickable: true,
   },
 });