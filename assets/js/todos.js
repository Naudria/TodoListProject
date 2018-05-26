// Check off Specific Todos By Clicking
//Using on (instead of click) makes all new lis work too

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

$("#toggleForm").click(function(){
	$("input[type='text']").fadeToggle();
});