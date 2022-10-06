import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDown from "./modules/dropDown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import animaisFetch from "./modules/animais-fetch.js";
import bitcoinFetch from "./modules/bitcoin-fetch.js";
import ScrollAnima from "./modules/scroll-anima.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-ativo="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]'  )
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropDown();
initMenuMobile();
initFuncionamento();


animaisFetch('../../animais-api.json','.numeros-grid');
bitcoinFetch('https://blockchain.info/ticker', '.btc-preco')