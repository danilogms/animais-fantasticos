import AnimaNumeros from "./anima-numeros.js";

export default function animaisFetch(url, target) {
  //Cria a diva contendo as informações com o total de animais
  function creatAnimal(animal) {
    //função usada pra cirar a div e span de cada animal
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = creatAnimal(animal);
    numerosGrid.appendChild(divAnimal); //metodo para atribuir a cada proximo filho o que foi criado c função creatAnimal
  }

  //Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    //console.log(AnimaNumeros.incrementarNumero(document.querySelector('.numeral')))
    animaNumeros.init();
  }

  //Puxa os animais atraves de um arquivo Json e cria cada animal utiliznaod creatAnimal
  async function cirarAnimais() {
    try {
      //fetch e espera resposta e transforma a resposta em Json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //Apos transformar Json ativa as funções preencher e animar numeros
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return cirarAnimais();
}
