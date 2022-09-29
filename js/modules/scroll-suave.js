export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href"); //seleciona apenas o atributo de href
    const section = document.querySelector(href);
    // LINK FEITO ENTRE ITEM E SEÇÃO
    const topo = section.offsetTop; //usamos para saber a distancia entre topo do site e o item
    //ferramenta que scrolla, 2 argumentos, o primeiro é o incio, segundo o fim, podem ser usadas medidads em px (cordenadas X e Y)
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }
  
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
