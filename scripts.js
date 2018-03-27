$(document).ready(function(){
	// init page
	var width = $(window).width() - 2*parseInt($('body').css('margin-left'));
	var height = $(window).height() - 2*parseInt($('body').css('margin-top'));
	width = width;
	height = height;
	$("#dimensions").text("Your viewport is " + $(window).width() + " by " + $(window).height());
	setPositions(width, height);
	draw(width, height);
	// resizing
    $(window).resize(function() {
		$("#dimensions").text("Your viewport is " + $(window).width() + " by " + $(window).height());
		var width = $(window).width() - 2*parseInt($('body').css('margin-left'));
		var height = $(window).height() - 2*parseInt($('body').css('margin-top'));
		setPositions(width, height);
		draw(width, height);
	});
});
// draw a square around the viewport
var draw = function(width, height) {
	width = width;
	height = height;
	console.log(width, height);
	// erase lines first
	$(".border").hide();
    $("#top").show().animate({width: width-2},1000, function() {
		$('#right').show();
		$('#right').animate({height: height-2},1000, function() {
			$('#bottom').show();
			$('#bottom').animate({width: width-2},1000, function() {
				$('#left').show();
				$('#left').animate({height: height-2},1000);
			});
		});
    });
}
// set positions of line segments
var setPositions = function(width, height) {
	$('#container').css({width: width, height: height});
	$('#content').css({width: width-4, height: height-4});
}