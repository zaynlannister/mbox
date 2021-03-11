var swiper = new Swiper('.swiper-container', {
	slidesPerView: 6,
	spaceBetween: 36,
	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},
});

let menuIcon = document.querySelector('.account');
let menuAcc = document.querySelector('.menu-acc');


menuIcon.onclick = function() {
	menuAcc.classList.toggle('active');
}

document.addEventListener('click', function(e) {
	if (e.target.className != 'account') {
  		menuAcc.classList.remove('active');
	}
})