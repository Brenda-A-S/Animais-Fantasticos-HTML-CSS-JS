import outsideClick from './outsideclick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if(events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.activeClass = activeClass;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget;
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    });
  }
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }


}