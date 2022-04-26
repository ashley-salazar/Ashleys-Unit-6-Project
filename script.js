//hides all div
$(" .Part-two-yes, .no-part-two, .YesEnding, .NoEnding").hide();

// yes 
$(".yes-button").click(function() {
	$(".Part-two-yes").show();
    $(".title").hide();
    $(".sceneoneimg").hide();
    $(".button").hide();
});

//no 
$(".no-button").click(function() {
$(".no-part-two").show();
    $(".title").hide();
     $(".button").hide();
     $(".sceneoneimg").hide();
     $(".Part-two-yes").hide();
});

// yes jase scene 
$(".jase").dblclick(function() {
    $(".Part-two-yes").hide();
     $(".YesEnding").show();
});

// no end scene 
$(".carriage").dblclick(function(){
    $(".no-part-two").hide();
    $(".NoEnding").show();
});

//ending changes 
$(".trophy").hover(function(){
	$(".YesEndingText").css("color","#0077b6");
});

$(".jail").hover(function(){
	$(".NoText").css("color","#9b2226");
});