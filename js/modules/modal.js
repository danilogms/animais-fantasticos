export default function initModal() {
  //Primeiro selecionamos todos os botoes que iremos crira ações, sendo estes, abrir, fechar, modal em si

  const botaoAbrir = document.querySelector('[data-modal="abrir"]'); //Botao do Login
  const botaoFechar = document.querySelector('[data-modal="fechar"]'); //Botao de fechar
  const containerModal = document.querySelector('[data-modal="container"]'); //Onde adicionaremos a classe ativo

  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add("ativo");
  }

  function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) {
      fecharModal(event);
    } //usamos a função de fechar dentro da função ativa quando clicamos fora do modal.
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    //Verificar se existem as constantes acima para iniciar as funções
    //Adicionando click e funções aos botoes
    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", clickForaModal); //Esse é o padrão de modais, clicar fora da area do modal faz fechar a caixa de dialogo
  }
}
