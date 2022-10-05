import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDown from "./modules/dropDown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";
import initAnimationScroll from "./modules/animation-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-ativo="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]'  )
modal.init();


initTooltip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
initAnimationScroll();
