
const swiper = () => {
	const swiper = new Swiper('.swiper', {
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		  },
		navigation : {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		  pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
	  });
}

export default swiper