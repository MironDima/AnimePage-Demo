
const filter = (card) => {
	const newAnime = card.sort((a, b) => {
		return (b.views - a.views)
	})
	return newAnime.slice(0, 5)
}

export default filter