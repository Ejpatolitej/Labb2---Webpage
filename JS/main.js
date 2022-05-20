//BURGER MENU
$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    });

    $(window).on('load-scroll',function(){
        $('fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle')
    })
})

//BG COLOR CHANGE
function bgChange(){
    document.querySelector('body').style.background = 'red';
}

//SECRET CODE
var secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	if (secretCode.indexOf(event.key) < 0 || event.key !== secretCode[current]) {
		current = 0;
		return;
	}

	current++;

	if (secretCode.length === current) {
		current = 0;
		modal.style.display = "block";
	}
};

document.addEventListener('keydown', keyHandler, false);

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
