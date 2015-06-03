$(document).ready(function(){

	// Menu plus icons
	$('.mainNavigation li ul').siblings('a').addClass('hasChildren').before('<a class="plus" href="#" />');
	//$('.sectionNavigation li ul').siblings('a').before('<a class="plus" href="#" />');
	$('.plus').click(function () {
		var plus = $(this);
	    plus.toggleClass('plusOpen').siblings('ul').slideToggle('fast');
	    plus.parent('li').toggleClass('open');
	    return false;
	});

	// Open links with rel="external" in new window
    $('a[rel="external"]').click(function() { window.open($(this).attr('href')); return false; });

});