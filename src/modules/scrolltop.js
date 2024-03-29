const scrollTop = () => {
	const scrollToTopButton = document.querySelector('#scrollToTopButton')
	scrollToTopButton.addEventListener('click', (e) => {
		e.preventDefault()
		seamless.scrollIntoView(document.querySelector(".header"), {
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	})
}

export default scrollTop