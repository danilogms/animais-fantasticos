export default function initTabNav() {
  //COLOCAMOS ISOLADO TODO O SCRIPT EM UMA FUNÇÃO PARA SEPARAR O COGIDO
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add("ativo"); //neste caso, sempre o primeiro item de tabContent estará ativo, fazendo com que não fique vago no site se não houver click para ativar as animações.

  function activeTab(index) {
    tabContent.forEach((element) => {
      element.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    //Neste caso usamos o .lenght pois verifica se realmente existe itens nos arrays tabMenu e tabContent, evitando bugs no codigo. lembrando que caso 1 esteja errado, dará False, sendo assim não executa o código abaixo.

    tabMenu.forEach((menu, index) => {
      menu.addEventListener("click", function () {
        activeTab(index);
      });
    }); //Neste caso, usamos index pois possuimos o msm numero de itens e seções
    //Looping feito, usamos index nos argumentos, em cada item é adicionado um evento 'click', executando a função anonima (executando activeTab(index)) feita mais acima.
  }
}

//AQUI NOS ATIVAMOS A FUNCTION, SENDO ASSIM O CODIGO DENTOR FUNCIONA NA PAGINA.
