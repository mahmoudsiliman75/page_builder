// START:: HANDILING PRELOADER
$(window).on('load', function() {
  $(".pre_loader").fadeOut('slow');
})
// END:: HANDILING PRELOADER

$(document).ready( function() {
  // START:: WOW JS
  wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animated',
    offset:       150,         
    mobile:       false,      
    live:         true       
  }
  )
  wow.init();
  // END:: WOW JS

  // START:: TOGGLE MENU
  $('#open_menu').on('click', () => {
    $('.small_menu').css('display', 'flex');
    setTimeout(() => {
      $('.small_menu').css('right', '0');
    }, 300);
    $('body').css('overflow', 'hidden');
  });

  $('#colse_menu').on('click', () => {
    $('.small_menu').css('right', '-100%');
    setTimeout(() => {
      $('.small_menu').css('display', 'none');
    }, 1000);
    $('body').css('overflow-y', 'auto');
  });
  // END:: TOGGLE MENU

  // START:: TOGGLE PRODUCT BUTTONS
  $('#cart_btn').css('display', 'none');
  $('#continue_shopping_btn').css('display', 'none');

  $('#add_to_cart_btn button').on('click', function(e) {
    e.preventDefault();
    $(this).parent().css('display', 'none');
    $('#cart_btn').css('display', 'block');
    $('#continue_shopping_btn').css('display', 'block');
  });
  // END:: TOGGLE PRODUCT BUTTONS

  // START:: OWL CAROUSEL
  $('#testemonials').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:30,
    nav: false,
    dots: true,
    items:1,
    rtl: true, 
    smartSpeed: 2000,
    dotsSpeed: 2000,
  });

  $('#videos_slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    dots: false,
    items:1,
    rtl: true, 
    smartSpeed: 2000,
    dotsSpeed: 2000,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
    }
  });

  $('#team').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:60,
    items:1,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000, 
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      600:{
        items:2,
        nav:false,
        dots:false,
        loop:true
      },
      1000:{
        items:3,
        nav:true,
        dots: true,
        loop:true
      }
    }
  });

  $('#clients').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:10,
    nav: false,
    dots: false,
    items:1,
    rtl: true, 
    smartSpeed: 2000,
    dotsSpeed: 2000,
    responsive:{
      0:{
        items:2,
        nav:false,
        loop:true
      },
      600:{
        items:4,
        nav:false,
        loop:true
      },
      1000:{
        items:6,
        nav:false,
        loop:true
      }
    }
  });

  $('#awards').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:10,
    items:1,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000, 
    responsive:{
      0:{
        items:2,
        nav:false,
        dots:false,
        loop:true
      },
      600:{
        items:4,
        nav:false,
        dots:false,
        loop:true
      },
      1000:{
        items:6,
        nav:true,
        dots: true,
        loop:true
      }
    }
  });

  $('#serv_products').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:60,
    items:1,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000, 
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      600:{
        items:2,
        nav:false,
        dots:false,
        loop:true
      },
      1000:{
        items:4,
        nav:true,
        dots: true,
        loop:true
      }
    }
  });

  $('#latest_news').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:60,
    items:1,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      600:{
        items:2,
        nav:false,
        dots:false,
        loop:true
      },
      1000:{
        items:3,
        nav:true,
        dots:false,
        loop:true
      }
    }
  });

  $('#media_latest_news').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:60,
    items:1,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      600:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      1000:{
        items:1,
        nav:true,
        dots:true,
        loop:true
      }
    }
  });

  $('#events').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:60,
    items:1,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      600:{
        items:1,
        nav:false,
        dots:false,
        loop:true
      },
      1000:{
        items:1,
        nav:true,
        dots: true,
        loop:true
      }
    }
  });
  // END:: OWL CAROUSEL

  // START:: TOGGLE FORMS
  $('#show_register').on('click', function() {
    $('#login_form_wraper').css('display', 'none');
    $('#login_form_wraper').css('display', 'none');
    $('#signup_form_wraper').css('display', 'block');
  });

  $('#show_reset').on('click', function() {
    $('#login_form_wraper').css('display', 'none');
    $('#signup_form_wraper').css('display', 'none');
    $('#reset_form_wraper').css('display', 'block');
  });
  // END:: TOGGLE FORMS

  // START:: FLEX SLIDER
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

  $('#carousel').flexslider({
    animation: "slide",
    controlNav: true,
    animationLoop: true,
    slideshow: true,
    itemWidth: 140,
    itemMargin: 20,
    asNavFor: '#slider'
  });
  // END:: FLEX SLIDER

  // START:: BOOTSTRAP SELECT
  $('#qualifications').selectpicker();
  $('#years').selectpicker();
  // END:: BOOTSTRAP SELECT

  // START:: CART INCREASE & DECREASE BTNS
  $(".plus_btn").on('click', function() {
    let productAmount = parseInt($(this).parent().siblings('.amount').text());
    productAmount += 1;
    $(this).parent().siblings('.amount').text(productAmount);
  });

  $(".minus_btn").on('click', function() {
    let productAmount = parseInt($(this).parent().siblings('.amount').text());
    productAmount -= 1;
    $(this).parent().siblings('.amount').text(productAmount);
  });
  // END:: CART INCREASE & DECREASE BTNS
});
