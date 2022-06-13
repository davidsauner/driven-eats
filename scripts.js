function teste(borda,nome,preco){
  let prato = document.querySelector('.borda-selecao')
  item1 = preco
  nome1 = nome
  if(prato !== null){
    prato.classList.remove('borda-selecao')
}
  borda.classList.add('borda-selecao')
  liberafinalizar()
  resultado()
 
}
let item1;
let item2;
let item3;
let nome1;
let nome2;
let nome3;
 

  
function coca(refri,nome,preco){
    let lqd = document.querySelector('.refri .borda-selecao')
     item2 = preco
     nome2 = nome
    if(lqd !== null){
      lqd.classList.remove('borda-selecao')
    }
    refri.classList.add('borda-selecao')
    liberafinalizar()
    resultado()
  }
  function pudim(sobre,nome,preco){
    let sob = document.querySelector('.sobre .borda-selecao')
     item3 = preco
     nome3 = nome
    if(sob !== null){
      sob.classList.remove('borda-selecao')
    }
    sobre.classList.add('borda-selecao')
    liberafinalizar()
    resultado()
  }


function finalizar(){
    if(item1 && item2 && item3){
    const i = document.querySelector('.tudo')
    i.classList.add('none')
    const b = document.querySelector('.aba')
    b.classList.remove('none')
    }
}
function liberafinalizar(){
    if(item1 && item2 && item3){
        let i = document.querySelector('.finalizar')
        i.innerHTML = 'Finalizar pedido'
    }

}
function resultado(){
    if(item1 && item2 && item3){
        let pedido1 = document.querySelector('.preco1')
        let pedido2 = document.querySelector('.preco2')
        let pedido3 = document.querySelector('.preco3')
        let name1 = document.querySelector('.nome1')
        let name2 = document.querySelector('.nome2')
        let name3 = document.querySelector('.nome3')
        let valor = document.querySelector('.total')
        name1.innerHTML = nome1
        name2.innerHTML = nome2
        name3.innerHTML = nome3

        pedido1.innerHTML = "R$:" + item1
        pedido2.innerHTML = "R$:" + item2
        pedido3.innerHTML = "R$:" + item3

        valor.innerHTML = item1 + item2 + item3
    ;       
    }

}