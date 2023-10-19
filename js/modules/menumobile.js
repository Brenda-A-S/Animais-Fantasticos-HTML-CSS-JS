import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click']
  
  if(menuButton) {
  function openMenu(event) {
    menuList.classList.add('active')
    menuButton.classList.add('active')
    menuButton.setAttribute('aria-expanded','true')
    outsideClick(menuList, eventos, () => {  
      menuList.classList.remove('active')
      menuButton.classList.remove('active')
      menuButton.setAttribute('aria-expanded','false')
    })
  }
  eventos.forEach(evento => menuButton.addEventListener(evento, openMenu))
  }
}