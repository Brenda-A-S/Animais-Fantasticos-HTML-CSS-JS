import TabNav from './modules/tabNav.js'
import initAnimacaoScroll from './modules/scroll.js'
import Accordion from './modules/accordion.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdownMenu.js'
import initMenuMobile from './modules/menumobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initAnimaisFetch from './modules/animaisfetch.js'
import initFetchBitcoin from './modules/btcfetch.js'

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initAnimacaoScroll()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initAnimaisFetch()
initFetchBitcoin()