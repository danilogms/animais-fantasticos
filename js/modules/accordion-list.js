export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
    
  }

  activeAccordion() {
    this.nextElementSibling.classList.toggle(this.activeClass);
    this.classList.toggle(this.activeClass);
    //console.log(event.currentTarget);  Também podemos usar, dana mesma
    //Neste caso o this fla com cada ITEM que esteja sendo clicado
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adiciona os eventos ao acordion

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //inicia a função

  init() {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this
  }
}
