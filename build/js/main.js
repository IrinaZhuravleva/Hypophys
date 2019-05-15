$(document).ready(function(){

  var link = $('.burger-menu');
  var link_active = $('.blockmenu__link');
  var menu = $('.blockmenu');
  var close = $('.blockmenu-close');


  link.click(function(){
    link.toggleClass('menu-link_active');
    menu.toggleClass('blockmenu_active');
    // link.css('display', 'none');
  });
  close.click(function(){
    menu.removeClass('blockmenu_active');
  });
  link_active.click(function(){
    menu.removeClass('blockmenu_active');
  });



	 // Fullpage scroll

    var myFullpage = new fullpage('#fullpage', {
        anchors: ['products', 'reglament', 'experience', 'company', 'mass-media', 'shop'],
        navigation: true,
        navigationPosition: 'left',
        // navigationTooltips: ['First page', 'Second page']
    });

	
});