import ScrollSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/animation-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import initAccordion from "./modules/accordion-list.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDown from "./modules/dropDown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();



initAnimationScroll();
initTabNav();
initAccordion();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
