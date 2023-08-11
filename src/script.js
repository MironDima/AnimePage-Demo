import setBg from "./modules/setBg";
import modal from './modules/modal';
import prelouder from './modules/prelouder';
import search from './modules/search';
import scrollTop from './modules/scrollTop';
import swiper from './modules/swiper';
import getData from './modules/getData';
import filter from "./filter";

prelouder()
setBg()
modal()
search()
scrollTop()
swiper()
getData('db.json').then((data) => filter(data.anime))

