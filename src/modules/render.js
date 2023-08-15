const render = (array) => {
	const wrapperCard = document.querySelector('.filter__gallery')
	wrapperCard.innerHTML = ''
	array.forEach(elem => {
		wrapperCard.insertAdjacentHTML('afterbegin', `
	<div class="product__sidebar__view__item set-bg mix day years" data-setbg= ${elem.image}>
    <div class="ep">${elem.rating} / 10</div> 
    <div class="view"><i class="fa fa-eye"></i>${elem.views}</div> 
    <h5><a href="/anime-details.html">${elem.title}</a></h5> 
    </div>`
	)
	});
	wrapperCard.querySelectorAll('.set-bg').forEach(card => {
		// const src = card.getAttribute('data-setbg');
		card.style.backgroundImage = `url(${card.dataset.setbg})`
	})

	
}
export default render 