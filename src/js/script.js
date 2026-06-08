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


  animationFn() {
    const animatedItems = document.querySelectorAll(".animate");
  
    if (!animatedItems.length) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
  
            setTimeout(() => {
              entry.target.classList.add("animated");
            }, delay);
  
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
  
    animatedItems.forEach((item) => {
      observer.observe(item);
    });
  },


  preloaderFn() {
    window.addEventListener("load", function () {
      const preloader = document.querySelector(".preloader");
    
      if (!preloader) return;
    
      setTimeout(() => {
        preloader.classList.add("hide");
      }, 300); // küçük bir delay daha smooth his verir
    });
  },


  init: function () {
    app.setWindowHeight();
    app.swiperFn();
    app.mobileMenuOpenFn();
    app.animationFn();
    app.preloaderFn();
  },
};

$(function () {
  app.init();
});