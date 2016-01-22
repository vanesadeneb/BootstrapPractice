var main = function(){
	$(".contenido").hide();
	$(".flecha").click(function(){
		$(".contenido").toggle(100);
	});
}

$(document).ready(main);