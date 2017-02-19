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
    
    
    var count = 9;
    var minutes = 32;
    var hours = 2;

    var end = 0;

    if (count < 10) {
        $('.dd-sec1').each(function(){
            $(this).html('0');
        });
        $('.dd-sec2').each(function(){
            $(this).html(count);
        });
    }
    else {
      $('.dd-sec1').each(function(){
          count = count + '';
         $(this).html(count[0]);
          count*=1;
      });
      $('.dd-sec2').each(function(){
          count = count + '';
         $(this).html(count[1]);
          count*=1;
      });
  }

  if (minutes < 10) {
      $('.dd-min1').each(function(){
         $(this).html('0'); 
     });
      $('.dd-min2').each(function(){
         $(this).html(minutes); 
     });
  }
  else {
     $('.dd-min1').each(function(){
         minutes = minutes + '';
         $(this).html(minutes[0]);
         minutes*=1;
     });
     $('.dd-min2').each(function(){
         minutes = minutes + '';
         $(this).html(minutes[1]);
         minutes*=1;
     });
 }

 if (hours < 10) {
    $('.dd-hours1').each(function(){
        $(this).html('0');
    });
    $('.dd-hours2').each(function(){
        $(this).html(hours);
    }); 
}
else {
    $('.dd-hours1').each(function(){
        hours = hours + '';
        $(this).html(hours[0]);
        hours*=1;
    });
    $('.dd-hours2').each(function(){
        hours = hours + '';
        $(this).html(hours[1]);
        hours*=1;
    });
}

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
        count = count - 1;
        if (count < 10) {
            $('.dd-sec1').each(function(){
                $(this).html('0'); 
            });
            $('.dd-sec2').each(function(){
                $(this).html(count); 
            });
        }
        else {
            $('.dd-sec1').each(function(){
                count = count + '';
                $(this).html(count[0]);
                count = count*1;
            });
            $('.dd-sec2').each(function(){
              count = count + '';
             $(this).html(count[1]);
              count = count*1;
           });
      }
      if (count == 0) {
        minutes = minutes - 1;
        if (minutes < 10 && minutes >= 0) {
                // $("#dd-min").html('0'+minutes);

                $('.dd-min1').each(function(){
                 $(this).html('0'); 
                });
                $('.dd-min2').each(function(){
                 $(this).html(minutes); 
                });


            }
            if (minutes > 10) {
                // $("#dd-min").html(minutes);
                $('.dd-min1').each(function(){
                    minutes = minutes + '';
                    $(this).html(minutes[0]);
                    minutes*=1;
                });
                 $('.dd-min2').each(function(){
                     minutes = minutes + '';
                     $(this).html(minutes[1]);
                     minutes*=1;
                 });
            }
            if (minutes < 0) {
                hours = hours - 1;
                if (hours < 10 && hours >=0) {
                    // $("#dd-hours").html('0'+hours);
                    $('.dd-hours1').each(function(){
                     $(this).html('0'); 
                    });
                    $('.dd-hours2').each(function(){
                     $(this).html(hours); 
                    });
                }
                if (hours>10) {
                    // $("#dd-hours").html('0'+hours);
                    $('.dd-hours1').each(function(){
                        hours = hours + '';
                        $(this).html(hours[0]);
                        hours*=1;
                    });
                    $('.dd-hours2').each(function(){
                        hours = hours + '';
                        $(this).html(hours[1]);
                        hours*=1;
                    });
                                }
                if (hours < 0 ) {

                    end = 1;
                    clearTimeout(counter);
                }
                if (end) { minutes = '00';}
                else {
                    minutes = 59;
                }
                $('.dd-min1').each(function(){
                    $('.dd-min1').html(minutes[0]);
                });
                $('.dd-min2').each(function(){
                    $('.dd-min1').html(minutes[1]);
                });
            }
            if (end) { count = '00';}
            else {
                count = 59;
            }
            $('.dd-sec1').each(function(){
                $(this).html(count[0]);
            });
            $('.dd-sec2').each(function(){
                $(this).html(count[1]);
            });
        }
    }
    
    
})
