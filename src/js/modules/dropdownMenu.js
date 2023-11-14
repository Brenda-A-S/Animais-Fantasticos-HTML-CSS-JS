import outsideClick from './outsideclick.js'

export default function initDropdownMenu() {

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['click'], () => {
      this.classList.remove('active')
    });
  }
  
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })

}