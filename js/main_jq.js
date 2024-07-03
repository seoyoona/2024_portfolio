const swiper = new Swiper('.exp-wrap.swiper-container', {
    slidesPerView: 1,
    loop: false,
    // speed: 500, 
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    // pagination: {
    //   el: '.swiper-pagination'
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼 요소
      prevEl: '.swiper-button-prev' // 이전 버튼 요소
    }
  });
