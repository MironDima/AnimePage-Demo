const renderSearch = (searchData) => {
	const wrapperSearchLink = document.querySelector('.saerch-modal-result')
	wrapperSearchLink.style.maxwidth = '500px'
	wrapperSearchLink.style.width = '100%'
	wrapperSearchLink.innerHTML = ''
	searchData.forEach(item => {
		wrapperSearchLink.insertAdjacentHTML('afterbegin',`
		<a class="p-1" href="/anime-details.html">${item.title}</a>
		`)
	});

}
export { renderSearch }