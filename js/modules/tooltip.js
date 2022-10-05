export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips); //Primeiro selecionamos todas as tooltips

    //sempre que tivermos callback referente a this, deveremos fazer o bind

    //Bind  do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //Cria a Tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); //Cria uma nova div
    const text = element.getAttribute("aria-label"); //Pega os atributos que existem nos itens que possuem Aria-label
    tooltipBox.classList.add("tooltip"); //adiciona classe tooltip a essa div
    tooltipBox.innerText = text; //passa o texto que foi setado acima na constante
    document.body.appendChild(tooltipBox); //adiciona essa tooltip ao final do body
    this.tooltipBox = tooltipBox;
  }

  //Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    //Cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove); //evento criado para a tooltip seguir o mouse em movimento na section
  }

  //Adiciona os eventos de mouseover a cada tooltip
  addEvent() {
    this.tooltips.forEach((item) => {
      //por ser mais de 1, fazemos looping e adicionamos o evento em todos os itens tootips
      item.addEventListener("mouseover", this.onMouseOver); //mouseover é mouse sobre
    });
  }

  //Remove a tooltip de acordo com os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    //Para ser ativada em eventos,é necessario possuir esse metodo
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  //Move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + "px"; //esses 20 px é pra manter uma distancia entre o mouse e a caixa e nao sobrepor um ao outro
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  init() {
    if (this.tooltips.length) {
      this.addEvent();
    }
    return this;
  }
}
