export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  //Busca os horarios que estão abertos segundo arquivo index
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }


  //Puxa os dados de hora e dia de acordo com horario de brasilia
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; //Horario Brasilia
  }


  //Verifica se o horario atual é o horario de funcionamento do estabelecimento
  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    //Caso retorne true indica que está aberto, caso false, fechado
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return semanaAberto && horarioAberto;
  }


  //Ativa a classe aberto caso esteja dentro do horario de funcionamento
  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
