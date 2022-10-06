export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    //bind
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; //DESCOBRINDO QUAL A DISTANCIA DE CADA ELEMENTO DESTA VARIAVEL ESTA DO TOPO DO SITE
      const metadeAtiva = (sectionTop - this.windowMetade) < 0; //PARA NÃO OCORRER DO SCROLL DO SITE BUGAR, SEMPRE IRÁ ATIVAR O SCRIPT QD CHEGAR A 60% DO SECTIONtOP
      if (metadeAtiva) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll); // USAMOS WINDOW PQ ESTAMOS FALANDO COM A JANELA EM GERAL}
    return this
  }
}
