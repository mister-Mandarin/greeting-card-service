const swiperDown = new Swiper('.gift-swiper-thumb', {
    spaceBetween: 16,
    slidesPerView: 6,
    freeMode: true,
 });

  const swiperUp = new Swiper('.gift-swiper-card', { 
    spaceBetween: 16,
    thumbs: {
        swiper: swiperDown,
  }
});