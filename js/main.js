// @ts-nocheck
/*global $, alert, console*/
$(document).ready(function () {
  "use strict";
  // selfInvoke Fn For Auto Slide
  (function autoSlider() {
    $(".slide-content .active").each(function () {
      // if the div is not the last child to the parent
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(2000)
          .fadeOut(500, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
        // if the div is  the last child to the parent
      } else {
        $(this)
          .delay(2000)
          .fadeOut(500, function () {
            $(this).removeClass("active");
            $(".slide-content div").eq(0).addClass("active").fadeIn();
            autoSlider();
          });
      }
    });
  })(); // end self Invoke Fn
  var leftArrow = $(".testim .fa-chevron-left"),
    rightArrow = $(".testim .fa-chevron-right");

  function checkChevron() {
    /*hide the left arrow if the client is the first client */
    if ($(".client:first").hasClass("active")) {
      leftArrow.fadeOut();
    } else {
      leftArrow.fadeIn();
    }
    /*hide the right arrow if the client is the last client */
    if ($(".client:last").hasClass("active")) {
      rightArrow.fadeOut();
    } else {
      rightArrow.fadeIn();
    }
  }
  //trigger the check function
  checkChevron();
  //when click on the right arrow the current client will fadeOut and the next will fadeIn
  $(".testim i").click(function () {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".testim .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();

        checkChevron();
      });
      //when click on the left arrow the current will fadeOut and the Previous one will fadeIn
    } else {
      $(".testim .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();

        checkChevron();
      });
    }
  });

  // scroll to top button

  $(".footer").click(function () {
    "use strict";
    $("html,body").animate({ scrollTop: 0 }, 800);
  });

  // create smooth scroll

  $(".navbar-nav .nav-link").click(function () {
    //$(this).parent().addClass("act").siblings().removeClass("act");
    $("body, html").animate(
      {
        // scrollTop = divId.offset().top
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          $(".navbar").innerHeight(),
      },
      400
    );
  });
  var scrolling = $("#scroll");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      scrolling.slideDown();
    } else {
      scrolling.slideUp();
    }
  });
  scrolling.click(function () {
    "use strict";
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  // hide placeholder on focus and show it on blur

  var placeAttr = "";
  $("[placeholder]")
    .focus(function () {
      placeAttr = $(this).attr("placeholder");

      $(this).attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", placeAttr);
    });

  $(".navbar .navbar-toggler").click(function () {
    $(".navbar-toggler i").toggleClass("fa-bars fa-times");
  });
  // scroll to any div but this time with bullets
  $(".nav-bullets .bullet").click(function () {
    // @ts-ignore
    $("body, html").animate(
      {
        scrollTop:
          $($(this).data("section")).offset().top - $(".navbar").innerHeight(),
      },
      700
    );
  });

  $('.timeline .timeline-content .show-more').click(function(){
    $('.hidden-year').show();
    $('.timeline .timeline-content .hide').slideDown();
    $(this).hide();

  })
// add background to bullet when clicking on it 
  $(".nav-bullets .bullet").click(function(){
    $(".nav-bullets .bullet").css('backgroundColor','transparent')
    $(this).css('backgroundColor','#00305b')
  })

  $(window).scroll(function () {
    //sync nav links with sections
    $('section').each(function () {

        if ($(window).scrollTop() >= $(this).offset().top - $('.navbar').innerHeight()){

            var bebo = $(this).attr('id');
            $(".navbar-nav .nav-item").removeClass('act');
            $('.navbar-nav .nav-item a[data-target = "' + bebo + '"]').parent().addClass('act')

        }
    });
    });
});