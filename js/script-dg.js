$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        navText:['<span class="dg-left"></span>','<span class="dg-right"></span>'],
        center: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20
            },
            992: {
                items: 3,
                margin: 20
            },
            1170: {
                items:3,
                margin: 50,
            }
        }
    });
    $('.bxslider').bxSlider({
        mode: 'vertical',
        slideWidth: 150,
        minSlides: 3,
        slideMargin: 10
  });
})
