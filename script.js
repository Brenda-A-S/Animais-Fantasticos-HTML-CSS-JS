function initTabNav(){const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    function activetab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activetab(index)
        })
    })
}}
initTabNav()

function initAccordion(){

}
initAccordion()