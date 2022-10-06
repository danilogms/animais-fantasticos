export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass){  //geralmente o que esta em string é o que iremos utilizar como parametro na constructor
  this.numeros = document.querySelectorAll(numeros);
  this.observerTarget = document.querySelector(observerTarget);
  this.observerClass = observerClass;

  //Binds
  this.handleMutation = this.handleMutation.bind(this)//Como se trata de um callback vindo do MutationObserver , há necessidade de realizar o bind para ser efetivo
}

//Recebe um elemento do DOM com um texto, transforma em numero e faz o incremento atraves do script. Como não possui referencia ao objeto da classe, temos que transforma-la em funcao estatica, podendo ser utilizada apenas se for chamada atraves do construtor da classe
static incrementarNumero(numero) {
  const total = +numero.innerText;
  //Extrai os números como string e transforma em Number
  const incremento = total / 100;
  let start = 0;
  const timer = setInterval(() => {
    start = start + incremento;
    numero.innerText = Math.ceil(start);
    if (start > total) {
      numero.innerText = total; //Por conta do Incremento, o resultado passa do valor total, sendo assim, após a conferencia do if e a animação, atribui-se novamente o valor total para fixar o erro.
      clearInterval(timer);
    }
  }, 70 * Math.random());
  //Constante Timer recebe um setInterval onde inicia 0 e incrementa 1 até chegar no valor total de cada span. Foi criada uma variavel para incrementar devido os números serem maiores e a demora para carregamento do mesmo, sendo assim, divide-se o total por um valor 100, atribui a variavel incremento e adiciona ao start, o resultado dá-se um número quebrado, entao é necessario usar metodo Math para fixar.
  //Math.random faz com que cada span termine a contagem de forma aleatoria, transformando a animação em algo mais orgânico


}

//Ativa o metodo IncrementarNumero atraves do número selecionado no DOM
  animaNumeros() {
    this.numeros.forEach((numero) => {
     this.constructor.incrementarNumero(numero)
    });
  }

  //Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //Adiciona a MutationObserver para verificar quanto a classe ativa é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  
  //Metodo para ativar
  init(){
    if(this.numeros.length && this.observerTarget){ 
      this.addMutationObserver();
    }
    return this
  }
  
}
