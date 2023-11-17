import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/animaisfetch.js';
import fetchBitcoin from './modules/btcfetch.js';
import AnimacaoScroll from './modules/scroll.js';
import DropdownMenu from './modules/dropdownMenu.js';
import MenuMobile from './modules/menumobile.js';
import Funcionamento from './modules/funcionamento.js';
import Slidenav from './modules/slide.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimais('https://raw.githubusercontent.com/Brenda-A-S/Animais-Fantasticos-HTML-CSS-JS/main/animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const animacaoScroll = new AnimacaoScroll('[data-anime="scroll"]');
animacaoScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', 'active');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', 'active');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

const slide = new Slidenav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
