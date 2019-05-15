$(document).ready(function(){

  var link = $('.burger-menu');
  var link_active = $('.blockmenu_active');
  var menu = $('.blockmenu');
  var close = $('.blockmenu-close');


  link.click(function(){
    menu.addClass('blockmenu_active');
    link.css('display', 'none');
	  });
	  close.click(function(){
	    menu.removeClass('blockmenu_active');
	  });
	  close.click(function(){
	    link.css('display', 'block');
	});

	 // Fullpage scroll

    var myFullpage = new fullpage('#fullpage', {
        // anchors: ['firstPage', 'secondPage', '3rdPage'],
        anchors: ['products', 'reglament'],
        // sectionsColor: ['#C63D0F', '#1BBC9B'],
        navigation: true,
        navigationPosition: 'left',
        // navigationTooltips: ['First page', 'Second page']
    });

	
});