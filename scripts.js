$(document).ready(function(){
	// init page
	var width = $(window).width() - 2*parseInt($('body').css('margin-left'));
	var height = $(window).height() - 2*parseInt($('body').css('margin-top'));
	width = .5* width;
	height = .5 * height;
	$("#dimensions").text("Your viewport is " + $(window).width() + " by " + $(window).height());
	//setPositions(width, height);
	draw(width, height);
	// resizing
    $(window).resize(function() {
		$("#dimensions").text("Your viewport is " + $(window).width() + " by " + $(window).height());
		var width = $(window).width() - 2*parseInt($('body').css('margin-left'));
		var height = $(window).height() - 2*parseInt($('body').css('margin-top'));
		//setPositions(width, height);
		draw(width, height);
	});
	
});
// draw a square around the viewport
var draw = function(width, height) {
	width = width+'px';
	height = height+'px';
	console.log(width, height);
	// erase lines first
	 $(".border").hide();
    $("#top").show().animate({width: "318px"},1000, function() {
      $("#right").show().animate({height: "238px"},1000, function() {
        $("#bottom").show().animate({width: "318px"},1000, function() {
          $("#left").show().animate({height: "238px"},1000, function() {
          });
        });
      });
    });
}
// set positions of line segments
var setPositions = function(width, height) {
	$('#top').css({top: 0, left: 0});
	$('#right').css({top: 0, left: width});
	$('#bottom').css({top: height, left: width});
	$('#left').css({top: height, left: 0});
}