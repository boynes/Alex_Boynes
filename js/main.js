/* global $ */
/* global jQuery */

jQuery(document).ready(function($) {

  //alert("jQuery is working!");

});

$(document).ready(function($){
  $('.mobile-nav-trigger').on('click', function(){

    //$('.primary-menu').toggle();

    // show & hide primary menu via changing CSS class to 'show'
    $('.primary-menu').toggleClass('show');
    // toggle hamburger menu icon to close icon
    $('span.fa',this).toggleClass('fa-bars').toggleClass('fa-close');
  });
  
  
  $('.projects-grid').magnificPopup({ //Magnific Popup Gallery
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },

  });

	$('.project-popup-trigger').magnificPopup({ //Magnific Popup Modal
		type: 'inline',
		preloader: false,
    mainClass: 'my-mfp-slide-bottom'
	});
	
});

/* Full Page start */

$('#fullpage').fullpage({
				anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
				menu: '#menu',
				scrollingSpeed: 1000,

        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'cubic-bezier(1.000, -0.440, 0.265, 1.385)',
        loopBottom: true,
        loopTop: true,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: true,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

  //events

  onLeave: function(index, nextIndex, direction) {
    $(this).addClass('remove-circle');
    $('.fp-section').eq(nextIndex - 1).removeClass('remove-circle');
  },
  afterLoad: function(anchorLink, index){},
  afterRender: function(){},
  afterResize: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
});//end of fullpage.js
