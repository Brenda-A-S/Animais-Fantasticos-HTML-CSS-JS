import outsideClick from './outsideclick.js'

export default class MenuMobile {
  constructor(menuButton, menuList, activeClass, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ['click'];
    else this.events = events;
    this.activeClass = activeClass;
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    this.menuButton.setAttribute('aria-expanded', 'true');
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
      this.menuButton.setAttribute('aria-expanded', 'false');
    })
  }
  addMenuMobileEvent() {
    this.events.forEach(events => this.menuButton.addEventListener(events, this.openMenu));
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
  }
}