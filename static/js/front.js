
/* -------------------------------------------------- */
/* owlCarousels */

$('.jumbotron-owl').owlCarousel( {
	nav:false,
	navText: [ '-', '+' ],
	loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  items:1,
  center:true,
  margin:30,
  animateOut: 'fadeOut',
  // animateIn: 'flipInX',
  stagePadding:0,
  smartSpeed:450
})

$('.clients-owl').owlCarousel( {
	nav:false,
	navText: [ '-', '+' ],
	loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  margin:30,
  stagePadding:15,
  smartSpeed:450,
  responsive : {
    0 : {
      items : 2,
    },
    768 : {
      items : 3,
    },
    990 : {
      items : 4,
    },
  }
})


$('.testimonials-owl').owlCarousel( {
	nav:false,
	navText: [ '-', '+' ],
	loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  margin:30,
  stagePadding:15,
  smartSpeed:450,
  responsive : {
    0 : {
      items : 1,
    },
    768 : {
      items : 2,
    },
    990 : {
      items : 3,
    },
  }
})

/* ------------------------------------------------------------------------------ */
/* -- Local variables:			*/
/* -- tab-width:				2		*/
/* -- js-indent-level:	2		*/
/* -- indent-tabs-mode: nil */
/* -- End:									*/
