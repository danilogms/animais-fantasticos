export default function initAccordion(){
  const accordionList = document.querySelectorAll('[data-ativo="accordion"] dt');
  const activeClass = 'ativo';
  
  function activeAccordion(){
    this.nextElementSibling.classList.toggle(activeClass);
    this.classList.toggle(activeClass);
    //console.log(event.currentTarget);  Também podemos usar, dana mesma
    //Neste caso o this fla com cada ITEM que esteja sendo clicado
  }

  if(accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    
    accordionList.forEach((list) => {
      list.addEventListener('click', activeAccordion);
    });
    }
  }



