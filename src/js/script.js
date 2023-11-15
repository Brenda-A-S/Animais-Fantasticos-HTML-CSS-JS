import Accordion from './modules/accordion.js'
import TabNav from './modules/tabNav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import fetchAnimais from './modules/animaisfetch.js'
import fetchBitcoin from './modules/btcfetch.js'
import initDropdownMenu from './modules/dropdownMenu.js'
import initMenuMobile from './modules/menumobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initAnimacaoScroll from './modules/scroll.js'

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

initDropdownMenu()
initMenuMobile()
initFuncionamento()
initAnimacaoScroll()