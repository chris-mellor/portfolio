$(document).ready(main);

function main () {    
    $('.homeButton').click(open_homepage);
	$('.aboutmeButton').click(open_aboutmepage);
	$('.blogButton').click(open_blogpage);
	$('.button6').click(open_project);
	$('.button1').click(open_designproposal);
	$('.button2').click(open_progressdemonstration);
	$('.button3').click(open_finaldelivery);
	$('.button4').click(open_portfolio);
	$('.button5').click(open_coursereflection);
	$('.returnButton').click(open_homepage);
}

function open_homepage() {
	$(designproposal).hide('slow');
	$(progressdemonstration).hide('slow');
	$(finaldelivery).hide('slow');
	$(portfolio).hide('slow');
	$(coursereflection).hide('slow');
    $(aboutmepage).hide('slow');
    $(homepage).show('slow');
}

function open_aboutmepage() {
	$(designproposal).hide('slow');
	$(progressdemonstration).hide('slow');
	$(finaldelivery).hide('slow');
	$(portfolio).hide('slow');
	$(coursereflection).hide('slow');
    $(aboutmepage).show('slow');
    $(homepage).hide('slow');
	
}

function open_blogpage() {
    
         window.open('http://chrisamellor.blogspot.com.au/','_blank');
     
}

function open_project(){
	window.open('http://deco1800-g34.uqcloud.net/','_blank');
}

function open_designproposal(){
	$('#homepage').hide('slow');
	$('#designproposal').show('slow');
}

function open_progressdemonstration(){
	$('#homepage').hide('slow');
	$('#progressdemonstration').show('slow');
}

function open_finaldelivery(){
	$('#homepage').hide('slow');
	$('#finaldelivery').show('slow');
}

function open_portfolio(){
	$('#homepage').hide('slow');
	$('#portfolio').show('slow');
}

function open_coursereflection(){
	$('#homepage').hide('slow');
	$('#coursereflection').show('slow');
}