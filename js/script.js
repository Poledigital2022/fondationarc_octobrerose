$(document).ready(function () {
  //     $('.section-slide').slick({
  //         dots: true,
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: false,
  //         responsive: [
  //             {
  //               breakpoint: 767,
  //               settings: {
  //                 centerMode: true,
  //                 centerPadding: '20px'
  //               }
  //             },
  //             {
  //                 breakpoint: 370,
  //                 settings: {
  //                   centerMode: true,
  //                   centerPadding: '0px'
  //                 }
  //               },
  //           ]
  //     });
  // /**/
  $('.cnt').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');
    // console.log(countTo);

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
      {
        duration: 4000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(numberWithSpaces(this.countNum));
        }
      });
  });
  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 3000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });



  });
  var getCounter = parseInt($('#counter').attr('data-count2'));
  var p = 1;
  if (getCounter < 200) {
    p = 0;
  } else if (getCounter > 200 && getCounter < 2000) {
    p = 1;
  } else {
    p = 1;
  }
  var setCounter = 0;
  function updateCounter() {
    if (setCounter < getCounter) {
      setCounter = setCounter + 1;
      const num1 = parseInt($(".counter1").text()) + 1;
      if (num1 <= 9) {
        $(".counter1").text(num1);
        $(".counter1_2").text(num1);
      } else {
        $(".counter1").text(0);
        const num2 = parseInt($(".counter2").text()) + 1;
        if (num2 <= 9) {
          $(".counter2").text(num2);
          $(".counter2_2").text(num2);
        } else {
          $(".counter2").text(0);
          const num3 = parseInt($(".counter3").text()) + 1;
          if (num3 <= 9) {
            $(".counter3").text(num3);
            $(".counter3_2").text(num3);
          } else {
            $(".counter3").text(0);
            const num4 = parseInt($(".counter4").text()) + 1;
            if (num4 <= 9) {
              $(".counter4").text(num4);
              $(".counter4_2").text(num4);
            } else {
              $(".counter4").text(0);
              const num5 = parseInt($(".counter5").text()) + 1;
              if (num5 <= 9) {
                $(".counter5").text(num5);
                $(".counter5_2").text(num5);
              } else {
                $(".counter5").text(9);
                $(".counter4").text(9);
                $(".counter3").text(9);
                $(".counter2").text(9);
                $(".counter1").text(9);
                $(".counter5_2").text(9);
                $(".counter4_2").text(9);
                $(".counter3_2").text(9);
                $(".counter2_2").text(9);
                $(".counter1_2").text(9);
              }
            }
          }
        }
      }
      // console.log(setCounter);
      // if(setCounter < getCounter){
      setTimeout(updateCounter, 0.001);
      // }
    }
  }
  updateCounter();


  $(".show-more").click(function () {
    $(".style1_section2_box3").toggleClass("active");
  });

  $(".header_btn").click(function () {
    $(".header_btn").toggleClass("active");
    $(".side_bar").toggleClass("active");
  });
  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $(".side_bar").toggleClass("active");
  });
  $("#closeCookieConsent").click(function () {
    $("#cookieConsent").fadeOut(800);
  });
  $(".fixedlink").click(function () {
    $(this).toggleClass("menu-on");
    $(".side_bar").removeClass("active");
    $(".burger-menu").toggleClass("menu-on");
  });
  $(document).on('click', '.cookieConsentOK', function () {

    $.ajax({

      url: 'cookies.php',

      type: 'GET',

      success: function (code_html, statut) {

        $("#cookieConsent").fadeOut(800);

      }

    });

  });

  /**/
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  var nextURL = 'https://my-website.com/page_b';
  var section2 = false;
  $(window).on('resize scroll', function () {
    if ($('.section2').isInViewport()) {
      if (section2 == false) {
        section2 = true;
        console.log("test..");
        // window.history.pushState('', 'New Page Title', '/new-url.php');
        // Current URL: https://my-website.com/page_a
        const nextURL = 'https://my-website.com/page_b';
        const nextTitle = 'My new page title';
        const nextState = { additionalInformation: 'Updated the URL with JS' };

        // This will create a new entry in the browser's history, without reloading
        window.history.pushState(nextState, nextTitle, nextURL);

        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, nextTitle, nextURL);
      }
      // window.history.replaceState("", "", nextURL);
    } else {
      section2 = false;
    }
  });
  /**/
  $('.slick3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
  $('.slick2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
  $('.slick1_1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    initialSlide: 1,
    adaptiveHeight: true,
    asNavFor: '.slick1'
  });
  $('.slick1').slick({
    infinite: true,
    asNavFor: '.slick1_1',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    initialSlide: 1,
    // centerPadding: '25%',
    centerPadding: '490px',
    dots: true,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerPadding: '450px'
        }
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '400px'
        }
      },
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '380px'
        }
      },
      {
        breakpoint: 1250,
        settings: {
          centerPadding: '350px'
        }
      },
      {
        breakpoint: 1180,
        settings: {
          centerPadding: '315px'
        }
      },
      {
        breakpoint: 1110,
        settings: {
          centerPadding: '245px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          centerPadding: '0'

        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '25%'

        }
      }
      // {
      //   breakpoint: 920,
      //   settings: {
      //     centerPadding: '180px'
      //   }
      // }
      // ,
      // {
      //   breakpoint: 840,
      //   settings: {
      //     centerPadding: '140px'
      //   }
      // },
      // {
      //   breakpoint: 840,
      //   settings: {
      //     centerPadding: '140px'
      //   }
      // }
      // ,
      // {
      //   breakpoint: 1279,
      //   settings: {
      //     centerPadding: '25%'
      //   }
      // }
    ]
  });

  $(function (e) {

    var hash = window.location.hash;

    var w = $(window).width();



    if (hash == "#histoire-de-marwan") {

      if (w > 767) {

        $('.histoire-marwan').click();

      }

      else {

        setTimeout(function () { $('.histoire-marwan').click(); }, 2000);

      }

    }



    if (hash == "#lutter-contre-le-bombardement-des-civils") {

      if (w > 767) {

        $('.lutter-contre-le-bombardement-des-civils').click();

      }

      else {

        setTimeout(function () { $('.lutter-contre-le-bombardement-des-civils').click(); }, 2000);

      }

    }



    if (hash == "#projetsderecherche") {

      if (w > 767) {

        $('.projetsderecherche').click();

      }

      else {

        setTimeout(function () { $('.projetsderecherche').click(); }, 2000);

      }

    }

  })


  $('.projetsderecherche').click(function (e) {

    e.preventDefault();

    $('body, html').animate({

      scrollTop: $('#projetsderecherche').offset().top - 1

    }, 100);

  });

});
