// Check off specific todos by clcking

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on text to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add to do list on

$("input").keypress(function(){
	if(event.which ===13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle("slow");
});