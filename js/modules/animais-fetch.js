import initAnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  function creatAnimal(animal) {
    //função usada pra cirar a div e span de cada animal
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = creatAnimal(animal);
        numerosGrid.appendChild(divAnimal); //metodo para atribuir a cada proximo filho o que foi criado c função creatAnimal
      });
      initAnimaNumeros(); //ativar função animanumeros toda vez q realizar o fetch
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animais-api.json");
}
