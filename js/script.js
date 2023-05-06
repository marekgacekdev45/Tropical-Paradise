const burgerBtn = document.querySelector('.burger-btn')
const navigation = document.querySelector('.nav__panel')
const links = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navigation.classList.toggle('nav__panel--active')
	links.forEach(link => {
		link.addEventListener('click', () => {
			navigation.classList.remove('nav__panel--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 1
	links.forEach(link => {
		link.classList.toggle('nav-items-animation')
		link.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	links.forEach(link => {
		link.classList.remove('nav-items-animation')
	})
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()

	footerYear.innerHTML = year
}
handleCurrentYear()

burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
