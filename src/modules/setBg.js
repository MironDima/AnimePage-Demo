const setBg = () => {
	const setBgCard = document.querySelectorAll('.set-bg')
	setBgCard.forEach(card => {
		card.style.backgroundImage = `url(${card.dataset.setbg})`
	})
}
export default setBg