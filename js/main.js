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
	
	// Wrap select boxes in a div
	$('.form-select').wrap("<div class='selectStyle'></div>");

  function responsiveTables(){
		$("table").each(function() {
			var myTable = $(this);
			var tableWidth = myTable.width();
			var parentWidth = myTable.parent().width();
			 
			if ((tableWidth > parentWidth) && !myTable.hasClass('responsiveTable')) {
				myTable.wrap('<div class="tableWrapper" />').addClass('responsiveTable');
				myTable.parent('.tableWrapper').before('<div class="swipeAction">Swipe to View</div>');
			}
			else if ((tableWidth <= parentWidth) && myTable.hasClass('responsiveTable')) {
				myTable.removeClass('responsiveTable').unwrap().siblings('.swipeAction').remove();
			}
		});
	}

	// Run Responsive Tables
	responsiveTables();
	 
	// Run on window resizing
	$(window).resize(function() {
		responsiveTables();
	});

});
