

$(document).ready(function(){
  /*MODAL WINDOW*/
  $('a[name="js-modal"]').on("click", function(e){
    e.preventDefault();
    var  id = $(this).attr('href'),
    winW = $(window).width(),
    winH = $(window).height();
    $(id).css("left", winW/2-$(id).width()/2);
    $(id).css("top", winH/2-$(id).height()/2);
    $('body').css("overflow-y", "hidden");
    $(id).fadeIn();
    $('#js-mask').fadeIn();
  });
  $('#js-mask, .db-close').on("click", function(){
    $('#js-mask').hide();
    $('.js-window').hide();
      $('body').removeAttr("style");

  });


  /*MODAL SUBMIT*/
  $('.js-submit').submit(function(){
    var phone = $(this).find('input[name="phone"]');
    
    if(phone.val() == ""){
      phone.focus();
      return false;
    }

    else{
      var form_data = $(this).serialize(); 
      $.ajax({
        type: "POST", 
        url: "/message.php", 
        data: form_data,
        success: function() {
          cleanTnanks(this);
        }
      });
    }
    return false;
  });

  function cleanTnanks(form){
    $('.js-window').hide();
    // $('a[href=#js-form2]').trigger('click');
    location = "thanks.php";
  };

  $(".js-mask").mask("+7 (999) - 999 - 99 - 99?");
  $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
  $('.az-select').each(function(){
    var select = $(this);    
    var option = select.find('select option');
    var str = '<div class="az-options">';
    select.find('option').each(function(){
      str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
    });
    str+= '</div>';
    select.html(select.html() + str);

    select.find('select').mousedown(function(){
      return false;
    });
    select.mouseup(function(){
      select.find('select').focus();
    });
    select.find('.az-options div[data-val]').click(function(){
      select.find('select').val($(this).attr('data-val'));
    });
    select.find('select').focusout(function(){
      if(!select.is(':hover')){
        select.find('.az-options').slideUp(0);
        select.removeClass('az-select-focus');
      }
    });
  });

  $(".az-select").click(function(){
    $(this).find('.az-options').slideToggle(0);
    $(this).toggleClass('az-select-focus');
  });

  /*TIMER*/
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
            /* TIMER END */
          });


