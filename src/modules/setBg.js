const setBg = () => {
	const setBgCard = document.querySelectorAll('.set-bg')
	setBgCard.forEach(card => {
		const src = card.getAttribute('data-setbg');
		card.style.backgroundImage = `url(${src})`
	})
}

export default setBg