$(document).ready(function(){

    // Pageslide - toggle mobile menu
    $('.menuToggle').click(function(){
    	$(this).toggleClass("open");
    	$('body').toggleClass("menuOpen");
    	return false;
	}).pageslide({
		direction:"left",
		href:"#siteNavigation",
		modal:"true"
	});
	// Explicitly set body width when pageslide comes from right
	$('body').onresize = function() {
	    $(this).css('width',document.width);
	};

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