$(document).ready(function(){

  // подключение всплывающего меню
  var link_active = $('.blockmenu__link');
  var menu = $('.blockmenu');
  var close = $('.menu-btn_active');
  var menuBtn =$('.menu-btn');

  menuBtn.click(function(){
    menuBtn.toggleClass('menu-link_active');
    menu.toggleClass('blockmenu_active');
    menuBtn.toggleClass('menu-btn_active');

  });
  close.click(function(){
    menu.removeClass('blockmenu_active');
  });
  link_active.click(function(){
    menu.removeClass('blockmenu_active');
  });

  //анимация молекулы и ее текстовых элементов

  // $('.clicker').on("click", function(){
  //   $('.header-content__background').toggleClass('active');
  //   $('.block').toggleClass('active');
  // });

  

  //анимация чисел

  // <p>Fun level <span id="fun-level" style="color: red;">0 %</span>.</p>

var percent_number_step = $.animateNumber.numberStepFactories.append(' %')

$('#fun-level-1').animateNumber(
  {
    number: 20,
    color: 'green',
    'font-size': '30px',

    numberStep: percent_number_step
  },
  {
    easing: 'swing',
    // duration: 15000
    duration: 5000
  }
);

$('#fun-level-2').animateNumber(
  {
    number: 40,
    color: 'green',
    'font-size': '30px',

    numberStep: percent_number_step
  },
  {
    easing: 'swing',
    // duration: 15000
    duration: 5000
  }
);

$('#fun-level-3').animateNumber(
  {
    number: 15,
    color: 'green',
    'font-size': '30px',

    numberStep: percent_number_step
  },
  {
    easing: 'swing',
    // duration: 15000
    duration: 5000
  }
);

	
});

jQuery(document).ready(function($){
  var contentSections = $('.cd-section'),
    navigationItems = $('#cd-vertical-nav a');

  updateNavigation();
  $(window).on('scroll', function(){
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
      $('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
      $('.touch #cd-vertical-nav').removeClass('open');
    });

  function updateNavigation() {
    contentSections.each(function(){
      $this = $(this);
      var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        navigationItems.eq(activeSection).addClass('is-selected');
      }else {
        navigationItems.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          600
        );
  }
});