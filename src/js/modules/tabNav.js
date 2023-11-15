export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'ativo'
    }
    activetab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass)
        })
        const direcao = this.tabContent[index].dataset.anime
        this.tabContent[index].classList.add(this.activeClass, direcao)
    }
    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activetab(index))
        })
    }
    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            this.addTabNavEvent();
            this.activetab(0);
        }
    }
}
