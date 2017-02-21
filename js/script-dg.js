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
    $('.js-click1 a').click(function(evt) {   
      evt.preventDefault();    
      var imgPath = $(this).attr('href'); 

      var oldImage = $('.katalog__item-imgwrap1 img');         

      var newImage = $('<img src="' + imgPath +'">');

      newImage.hide();     
      $('.katalog__item-imgwrap1').prepend(newImage);
      $('.katalog__item-imgwrap1').attr('href', imgPath);  
      newImage.fadeIn(300);    

      oldImage.fadeOut(200,function(){
       $(this).remove();
    });    
    });   
    $('.js-click1 a:first').click();

     $('.js-click2 a').click(function(evt) {   
       evt.preventDefault();    
       var imgPath = $(this).attr('href'); 

       var oldImage = $('.katalog__item-imgwrap2 img');         

       var newImage = $('<img src="' + imgPath +'">');

       newImage.hide();     
       $('.katalog__item-imgwrap2').prepend(newImage);
       $('.katalog__item-imgwrap2').attr('href', imgPath);  
       newImage.fadeIn(300);    

       oldImage.fadeOut(200,function(){
        $(this).remove();
     });    
     });   
     $('.js-click2 a:first').click();

     $('.js-click3 a').click(function(evt) {   
       evt.preventDefault();    
       var imgPath = $(this).attr('href'); 

       var oldImage = $('.katalog__item-imgwrap3 img');         

       var newImage = $('<img src="' + imgPath +'">');

       newImage.hide();     
       $('.katalog__item-imgwrap3').prepend(newImage);
       $('.katalog__item-imgwrap3').attr('href', imgPath);  
       newImage.fadeIn(300);    

       oldImage.fadeOut(200,function(){
        $(this).remove();
     });    
     });   
     $('.js-click3 a:first').click();
    
    $('.js-click4 a').click(function(evt) {   
       evt.preventDefault();    
       var imgPath = $(this).attr('href'); 

       var oldImage = $('.katalog__item-imgwrap4 img');         

       var newImage = $('<img src="' + imgPath +'">');

       newImage.hide();     
       $('.katalog__item-imgwrap4').prepend(newImage);
       $('.katalog__item-imgwrap4').attr('href', imgPath);  
       newImage.fadeIn(300);    

       oldImage.fadeOut(200,function(){
        $(this).remove();
     });    
     });   
     $('.js-click4 a:first').click();
    
    $('.js-click5 a').click(function(evt) {   
       evt.preventDefault();    
       var imgPath = $(this).attr('href'); 

       var oldImage = $('.katalog__item-imgwrap5 img');         

       var newImage = $('<img src="' + imgPath +'">');

       newImage.hide();     
       $('.katalog__item-imgwrap5').prepend(newImage);
       $('.katalog__item-imgwrap5').attr('href', imgPath);  
       newImage.fadeIn(300);    

       oldImage.fadeOut(200,function(){
        $(this).remove();
     });    
     });   
     $('.js-click5 a:first').click();
    
    
    $(".single_image").fancybox();
    $("a[rel=group]").fancybox({
      'transitionIn' : 'none',
      'transitionOut' : 'none',
      'titlePosition' : 'over',
      'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
       return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
       }
    });
})
