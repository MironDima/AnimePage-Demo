const prelouder = () => {
const prelouder = document.querySelector('.preloder')
prelouder.classList.add('active')
setTimeout(() => {
	prelouder.classList.remove('active')
},500)
}
export default prelouder