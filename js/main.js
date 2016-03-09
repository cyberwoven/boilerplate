jQuery(document).ready(function($){

	// Menu plus icons
	$('.mainNavigation li ul').siblings('a').addClass('hasChildren').before('<a class="plus" href="#" />');
	$('.plus').on("click", function(e){
		var plus = $(this);
	    plus.toggleClass('plusOpen').siblings('ul').slideToggle('fast');
	    plus.parent('li').toggleClass('open');
	    e.preventDefault();
	});

	// Open links with rel="external" in new window
    $('a[rel="external"]').on("click",function(e){
    	window.open($(this).attr('href'));
    	e.preventDefault();
    });

});