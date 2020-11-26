
  $(function(){

    $('.menu__btn').on('click',function() {
        $('.menu__list').toggleClass('menu__list--active')

    });
    



$(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

});
$('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
   
    asNavFor: '.heroes__slider-text',
    prevArrow:'<button class="slick-btn slick-prev"><img src="images/left.png" alt="prev"></button>',
    nextArrow:'<button class="slick-btn slick-next"><img src="images/right.png" alt="prev"> </button>',
    responsive:     [
        {
            breakpoint:769,
settings:{
    arrows:false
}
        }
    ]
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows:false,
  });
  });