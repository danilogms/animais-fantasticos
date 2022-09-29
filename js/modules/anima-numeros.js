export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
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
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
