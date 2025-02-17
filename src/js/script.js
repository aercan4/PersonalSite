var app = {
  setWindowHeight() {
    document.documentElement.style.setProperty(
      "--window-inner-height",
      $(window).innerHeight() + "px"
    );
  },

  swiperFn() {
    var jobSlider = new Swiper(".job-slider", {
      loop: false,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 20,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".job-slider-next",
        prevEl: ".job-slider-prev",
      },
      pagination: {
        el: ".nav-pagination.swiper-pagination.job-slider-nav",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1.3,
        },
        375: {
          slidesPerView: 1.4,
        },
        440: {
          slidesPerView: 1.4,
        },
        525: {
          slidesPerView: 1.8,
        },
        650: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1700: {
          slidesPerView: 4,
        },
      },
    });



    $(function () {
      window.setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 300);
    });
    $(window).focus(function () {
      {
        window.dispatchEvent(new Event("resize"));
      }
    });
  },


  mobileMenuOpenFn() {
    $("body").on("click", ".js-open-menu", function () {
      if ($(".header").hasClass("active")) {
        $(".header").removeClass("active");
        $(".js-open-menu").removeClass("active");
        $("html, body").removeClass("scroll-disabled");
      } else {
        $(".header").addClass("active");
        $(".js-open-menu").addClass("active");
        $("html, body").addClass("scroll-disabled");
      }
    });
  },
  // formValidation() {
  //   $("#contactForm").validate({
  //     submitHandler: function (form) {
  //       // console.log(form)
  //       // $('#contactFormLoader').css('display', 'flex');

  //       $.post("send.php", $(form).serialize())
  //         .fail(function () {
  //           // $('#contactFormLoader').hide();

  //           // Swal.fire({
  //           //     title: 'Error!',
  //           //     text: "Unespected error. Please try later",
  //           //     icon: 'error',
  //           //     confirmButtonText: 'Close'
  //           // }).then((result) => {
  //           //     // Reload the Page
  //           //     location.reload();
  //           // });
  //         })
  //         .done(function (data) {
  //           // $('#contactFormLoader').hide();

  //           if (!data.error) {
  //             $(form).trigger("reset");
  //             // $('#contactFormContent').hide();
  //             // $('#contactThankYouContent').show();
  //           } else {
  //             // Swal.fire({
  //             //     title: 'Error!',
  //             //     text: data.message,
  //             //     icon: 'error',
  //             //     confirmButtonText: 'Close'
  //             // }).then((result) => {});
  //           }
  //         });
  //     }
  //   });
  // },



  init: function () {
    app.setWindowHeight();
    app.swiperFn();
    app.mobileMenuOpenFn();
    // app.formValidation();
  },
};

$(function () {
  app.init();
});





// document.addEventListener("DOMContentLoaded", function() {
//   let forms = document.querySelectorAll('.wpcf7-form');
//   forms.forEach(form => {
//       form.setAttribute("action", "");
//   });
// });
