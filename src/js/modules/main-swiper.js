function mainSwiper () {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        direction: 'vertical',
        mousewheel: true,
        speed: 2500,
        parallax: true,
    });  
    
    swiper.on('slideChange', function(){
        document.querySelectorAll('.header-content__slide').forEach(function(e, i){
            return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
        })
    })
};

export default mainSwiper;