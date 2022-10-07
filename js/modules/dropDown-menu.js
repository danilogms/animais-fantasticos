import outsideClick from "./outsideClick.js";

export default class DropDown {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    //Defina touchstart e click para argumento padrão de events caso o user nao defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeClass = "ativo";
    //bind
    this.activeDropdown = this.activeDropdown.bind(this);
  }

  //Ativa o dropdownmenu e adiciona a função que observa o clique fora dele
  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //Adiciona os eventos ao dropdownmenu
  addEventDropdown() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  //Ativa a função
  init() {
    if (this.dropdownMenus.length) {
      this.addEventDropdown();
    }
    return this;
  }
}
