//NAVEGAÇÃO POR TABS

function initTabNav(){  //COLOCAMOS ISOLADO TODO O SCRIPT EM UMA FUNÇÃO PARA SEPARAR O COGIDO
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo')//neste caso, sempre o primeiro item de tabContent estará ativo, fazendo com que não fique vago no site se não houver click para ativar as animações.
  
  if(tabMenu.length && tabContent.length){//Neste caso usamos o .lenght pois verifica se realmente existe itens nos arrays tabMenu e tabContent, evitando bugs no codigo. lembrando que caso 1 esteja errado, dará False, sendo assim não executa o código abaixo.
  function activeTab(index){
    tabContent.forEach((element )=> {
      element.classList.remove('ativo') 
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo',direcao);
  }
  
  
  tabMenu.forEach((menu,index) => {  
    menu.addEventListener('click', function(){
      activeTab(index);
    })
  });//Neste caso, usamos index pois possuimos o msm numero de itens e seções
  //Looping feito, usamos index nos argumentos, em cada item é adicionado um evento 'click', executando a função anonima (executando activeTab(index)) feita mais acima.
  }}
  
  initTabNav(); //AQUI NOS ATIVAMOS A FUNCTION, SENDO ASSIM O CODIGO DENTOR FUNCIONA NA PAGINA.
  
  
  function initAccordion(){
  const accordionList = document.querySelectorAll('[data-ativo="accordion"] dt');
  const activeClass = 'ativo';
  
  if(accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    function activeAccordion(){
      //console.log(event.currentTarget);  Também podemos usar, dana mesma
      //Neste caso o this fla com cada ITEM que esteja sendo clicado
      this.nextElementSibling.classList.toggle(activeClass);
      this.classList.toggle(activeClass);
    }
  
    accordionList.forEach((list) => {
      list.addEventListener('click', activeAccordion);
    });
    }
  }
  
  initAccordion();


  //SCROLL SUAVE INTERNO

  
  function initScrollSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
    if(linksInternos.length){
      function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); //seleciona apenas o atributo de href
        const section = document.querySelector(href);
        // LINK FEITO ENTRE ITEM E SEÇÃO
        const topo = section.offsetTop; //usamos para saber a distancia entre topo do site e o item
        //ferramenta que scrolla, 2 argumentos, o primeiro é o incio, segundo o fim, podem ser usadas medidads em px (cordenadas X e Y)
        window.scrollTo({
          top: topo,
          behavior: 'smooth'
        })
        
      }

      linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
      })
    }
  }

  initScrollSuave();

  

function initAnimationScroll(){
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

initAnimationScroll();