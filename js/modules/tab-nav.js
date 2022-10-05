export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); //seleciona o menu
    this.tabContent = document.querySelectorAll(content); //seleciona o conteudo
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  //Adicionando evento ao tabMenu
  addTabMenuEvent() {
    this.tabMenu.forEach((menu, index) => {
      menu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabMenuEvent();
      //Ativar primeiro item da lista 
      this.activeTab(0);
    }
    return this
  }
}
