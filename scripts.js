function teste(borda){
  let prato = document.querySelector('.borda-selecao')
  if(prato !== null){
    prato.classList.remove('borda-selecao')
  
  borda.classList.add('borda-selecao')
  }

}
 

  
function coca(refri){
    let lqd = document.querySelector('.refri .borda-selecao')
    if(lqd !== null){
      lqd.classList.remove('borda-selecao')
    }
    refri.classList.add('borda-selecao')
  }
  function pudim(sobre){
    let sob = document.querySelector('.sobre .borda-selecao')
    if(sob !== null){
      sob.classList.remove('borda-selecao')
    }
    sobre.classList.add('borda-selecao')
  }

  function ave(tentando){
    alert("famou")
  let i = document.querySelector('.none')
  if(i !== null){
      i.classList.add('none')
    }else{
     tentando.classList.remove('none')
    }
}
function finalizar(){
    const i = document.querySelector('.tudo')
    i.classList.add('none')
    const b = document.querySelector('.aba')
    b.classList.remove('none')
}