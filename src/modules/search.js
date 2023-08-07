const search = () => {
	const searchInput = document.getElementById('search-input');
	console.log(searchInput);
	searchInput.addEventListener('change', (e) => {
		e.preventDefault
		console.log(e.target.value);
	})
}
export default search