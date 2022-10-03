export default class ScrollSuave {
  constructor(links, options) {
    //dev podera selecionar quais links receberao os atributos da classe
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this); //essa função bind define qual vai ser o this dessa função, independente de onde utilizar o this.scrollToSection, ele retornará o this atribuido a ele.
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href"); //seleciona apenas o atributo de href
    const section = document.querySelector(href);
    // LINK FEITO ENTRE ITEM E SEÇÃO
    //const topo = section.offsetTop; //usamos para saber a distancia entre topo do site e o item
    //ferramenta que scrolla, 2 argumentos, o primeiro é o incio, segundo o fim, podem ser usadas medidads em px (cordenadas X e Y)
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this; //importante retornar}
  }
}
