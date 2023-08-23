const animeListGanres = (array, ganres) => {
	const wrapperList = document.querySelector('.product .col-lg-8')
	// wrapperList.innerHTML = ''

	ganres.forEach(ganre => {
		const productBlock = document.createElement('div')
		const rowList = document.createElement('div')
		const filterGanre = array.filter((item) => {
			return item.ganre === ganre
		})
		rowList.classList.add('row')

		productBlock.insertAdjacentHTML("afterbegin", `<div class="row">
		<div class="col-lg-8 col-md-8 col-sm-8">
			<div class="section-title">
				<h4>${ganre}</h4>
			</div>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-4">
			<div class="btn__all">
				<a href="/categories.html" class="primary-btn">View All <span class="arrow_right"></span></a>
			</div>
		</div>
	</div>`)

		filterGanre.forEach(elem => {
			const tagsGanre = document.createElement('ul')
			elem.tags.forEach(tag => {
				tagsGanre.insertAdjacentHTML("afterbegin", `
				<li>${tag}</li>
	`)
			})
			rowList.insertAdjacentHTML("afterbegin", `
		<div class="col-lg-4 col-md-6 col-sm-6">
		<div class="product__item">
			<div class="product__item__pic set-bg" data-setbg="${elem.image}">
				<div class="ep">${elem.rating} / 18</div>
				<div class="view"><i class="fa fa-eye"></i> ${elem.views}</div>
			</div>
			<div class="product__item__text">
				${tagsGanre.outerHTML}
				<h5><a href="/anime-details.html">The Seven Deadly Sins: Wrath of the Gods</a></h5>
			</div>
		</div>
	</div>			
		`)
		})
		productBlock.append(rowList)
		wrapperList.append(productBlock)
		wrapperList.querySelectorAll('.set-bg').forEach(card => {
			card.style.backgroundImage = `url(${card.dataset.setbg})`
		})
	});

}
export default animeListGanres