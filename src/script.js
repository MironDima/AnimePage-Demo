import setBg from "./modules/setBg";
import modal from './modules/modal';
import prelouder from './modules/prelouder';
import search from './modules/search';
import scrollTop from './modules/scrollTop';
import swiper from './modules/swiper';
import getData from './modules/getData';
import filter from "./modules/filter";
import render from "./modules/render";
import addGanres from "./modules/addGanres";
import animeListGanres from "./modules/animeListGanres";

getData('db.json').then((data) => {
	render(filter(data.anime))
	animeListGanres(data.anime,addGanres(data.anime))
})
prelouder()
setBg()
modal()
search()
scrollTop()
swiper()


