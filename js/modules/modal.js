export default class Modal {
  //Primeiro selecionamos todos os botoes que iremos crira ações, sendo estes, abrir, fechar, modal em si
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir); //Botao do Login
    this.botaoFechar = document.querySelector(botaoFechar); //Botao de fechar
    this.containerModal = document.querySelector(containerModal); //Onde adicionaremos a classe ativo
    //bind This ao cllback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  //modal abrir ou fechar
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  //Adiciona evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //Padrao para fechar modal ao clicar do lado de fora do item
  clickForaModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal();
    } //usamos a função de fechar dentro da função ativa quando clicamos fora do modal.
  }

  //Adicionando os eventos aos elementos do modal
  addEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEvents();
    }
    return this
  }
}
