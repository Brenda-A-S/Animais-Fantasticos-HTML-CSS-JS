import Accordion from './modules/accordion.js'
import TabNav from './modules/tabNav.js'
import Modal from './modules/modal.js'
import initAnimacaoScroll from './modules/scroll.js'
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

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

initAnimacaoScroll()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initAnimaisFetch()
initFetchBitcoin()