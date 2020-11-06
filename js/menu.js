$(document).ready(main);

function main(){

	var cont = 1;
	var x;

	$('.menu_bar').click(function(){

		if (cont == 1) {
		cont = 0;
		$('nav').animate({
			left: '0'
		});
		
		}else{
			cont = 1;
			$('nav').animate({
			left: '-100%'
				});
			}
	});

	$('.botones').click(function Menu(){

		$('nav').animate({
			left: '-100%'
		});
		
	});
	

}