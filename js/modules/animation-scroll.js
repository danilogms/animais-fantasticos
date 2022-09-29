export default function initAnimationScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  
  if(sections.length){
    const metadeTela = window.innerHeight * 0.6 //USAMOS PARA SABER A ALTURA DA PAGE, ASSIM PEGAMOS 60% DO VALOR DELA PARA ATIVAR AS ANIMAÇÕES ABAIXO
    function animaScroll(event){
      event.preventDefault();
      sections.forEach((section) => {
          var sectionTop = section.getBoundingClientRect().top; //DESCOBRINDO QUAL A DISTANCIA DE CADA ELEMENTO DESTA VARIAVEL ESTA DO TOPO DO SITE
          const metadeAtiva = sectionTop - metadeTela //PARA NÃO OCORRER DO SCROLL DO SITE BUGAR, SEMPRE IRÁ ATIVAR O SCRIPT QD CHEGAR A 60% DO SECTIONtOP
          if(metadeAtiva < 0){
             section.classList.add('ativo')}//TODA VEZ Q SECTIONTOP ESTIVER MENOR QUE 0 O SCRIPT SERA ATIVO,ATIVANDO A CLASSE 'ATIVO' A SEÇÃO.
          
      });
    }
  
  window.addEventListener('scroll', animaScroll);// USAMOS WINDOW PQ ESTAMOS FALANDO COM A JANELA EM GERAL}
}}