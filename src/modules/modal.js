import {animate} from "./helpers";

const modal = () => {
	const searchIcone = document.querySelector('.icon_search');
	const searchBlock = document.querySelector('.search-model');
	const searchClose = searchBlock.querySelector('.icon_close');
	searchIcone.addEventListener('click', () => {
		
		animate({
			duration: 300,
			timing(timeFraction) {
			  return timeFraction;
			},
			draw(progress) {
			searchBlock.style.display = 'block'
			console.log(progress);
			searchBlock.style.opacity = progress
			}
		  });
	})
	searchClose.addEventListener('click', () => {
		searchBlock.style.display = 'none'
	})
}
export default modal