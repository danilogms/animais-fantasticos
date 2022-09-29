import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.add("ativo");
    menuList.classList.add("ativo");
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove("ativo");
      menuList.classList.remove("ativo");
    });
  }
  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
