export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    
    //Bind
    this.checkDistance = this.checkDistance.bind(this)
  }

  //Pega a distancia de cada item em relação ao topo da pagina
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }


  //Verifica a distancia em cada objeto em relação ao Scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

 

  init() {
    if(this.sections.length){
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance); // NAO ESQUECER O BIND
    }
    return this
  }


  //Remove o Event de Scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance)
  }

}
