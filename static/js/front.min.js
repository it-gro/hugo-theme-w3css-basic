
/* -------------------------------------------------- */
/* owlCarousels */

$('.jumbotron-owl').owlCarousel( {
  nav:false,
  navText:[ '-', '+' ],
  dots:false,
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  center:true,
  margin:30,
  animateOut:'fadeOut',
  // animateIn:'flipInX',
  stagePadding:0,
  smartSpeed:450,
  items:1,
})

$('.clients-owl').owlCarousel( {
  nav:false,
  navText:[ '-', '+' ],
  dots:false,
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  center:true,
  margin:30,
  stagePadding:15,
  smartSpeed:450,
  items:1,
  responsiveClass:true,
  responsive:{
    0:{
      items:1
    },
    768:{
      items:2
    },
    990:{
      items:3
    },
  },
})


$('.testimonials-owl').owlCarousel( {
  nav:false,
  navText:[ '-', '+' ],
  dots:false,
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  center:true,
  margin:30,
  stagePadding:15,
  smartSpeed:450,
  items:1,
  responsiveClass:true,
  responsive:{
    0:{
      items:1
    },
    768:{
      items:1
    },
    990:{
      items:3
    },
  },
})

/* ------------------------------------------------------------------------------ */
/* -- Local variables:     */
/* -- tab-width:       2   */
/* -- js-indent-level: 2   */
/* -- indent-tabs-mode:nil */
/* -- End:                 */
