const addGanres = (card) => {
	const ganres = new Set();
	card.forEach(item => {
		ganres.add(item.ganre)
	});
	return ganres	
}

export default addGanres