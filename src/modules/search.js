import { renderSearch } from "./renderSearch";
const search = () => {
	const searchInput = document.getElementById('search-input');

	const searchFunc = (searchString) => {
		return fetch('db.json')
			.then((res) => res.json())
			.then((data) => {
				const searchData = data.anime.filter(dataItem => {
					return dataItem.title.toLowerCase().includes(searchString.toLowerCase()) || dataItem.description.toLowerCase().includes(searchString.toLowerCase())
				})
				renderSearch(searchData.slice(0,5))
			})
	}


	searchInput.addEventListener('input', (e) => {
		e.preventDefault
		searchFunc(e.target.value);
	})
}
export default search