export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]"); //Primeiro selecionamos todas as tooltips
  tooltips.forEach((item) => {
    //por ser mais de 1, fazemos looping e adicionamos o evento em todos os itens tootips
    item.addEventListener("mouseover", onMouseOver); //mouseover é mouse sobre
  });

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this); // THIS FAZ REFERENCIA AO ITEM QUE ESTA SENDO PASSANDO O MOUSE SOBRE
    tooltipBox.style.top = event.pageY + "px"; //PageY e X é onde o mouse se encontra na pagina, isso atualiza o CSS de tooltip. concatenamos PX pois o valor utilizado é em px
    tooltipBox.style.left = event.pageX + "px";
    //criamos um novo evento para que não fique repetindo o mouseOver sem parar.
    onMouseLeave.tooltipBox = tooltipBox; //Isso preenche o Objeto criado abaixo com os itens criados na tooltipbox. Criado nova propriedade para o objeto
    this.addEventListener("mouseleave", onMouseLeave); //podemos retornar Objetos tambem
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove); //evento criado para a tooltip seguir o mouse em movimento na section
  }

  //Neste caso criaremos um objeto para poder chamá-lo dentro da função com seu método
  const onMouseLeave = {
    handleEvent() {
      //Para ser ativada em eventos,é necessario possuir esse metodo
      this.tooltipBox.remove();
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px"; //esses 20 px é pra manter uma distancia entre o mouse e a caixa e nao sobrepor um ao outro
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); //Cria uma nova div
    const text = element.getAttribute("aria-label"); //Pega os atributos que existem nos itens que possuem Aria-label
    tooltipBox.classList.add("tooltip"); //adiciona classe tooltip a essa div
    tooltipBox.innerText = text; //passa o texto que foi setado acima na constante
    document.body.appendChild(tooltipBox); //adiciona essa tooltip ao final do body
    return tooltipBox;
  }
}
