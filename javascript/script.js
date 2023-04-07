
// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [Sobre Mim]
let a_sobreMim = document.querySelector('a#btn-mais-sobreMim')
a_sobreMim.addEventListener('click', ()=> {
    let input_sobreMim = document.querySelector('#mais-sobreMim')

    if (input_sobreMim.checked == false) {
        a_sobreMim.innerText = "MOSTRAR MENOS"
    }
    else if (input_sobreMim.checked == true) {
        a_sobreMim.innerText = "MOSTRAR MAIS"
    }
})




// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [PROJETOS]
let a_projetos = document.querySelector('a#btn-mais-projetos')
a_projetos.addEventListener('click', ()=> {
    let input_projetos = document.querySelector('input#mais-projetos')

    if (input_projetos.checked == false) {
        a_projetos.innerHTML = "MOSTRAR MENOS"
    }
    else if (input_projetos.checked == true) {
        a_projetos.innerHTML = "MOSTRAR MAIS"
    }
})





// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [HABILIDADES]
let a_habilidades = document.querySelector('a#btn-mais-habilidades')
a_habilidades.addEventListener('click', ()=> {
    let input_habilidades = document.querySelector('input#mais-habilidades')

    if (input_habilidades.checked == false) {
        a_habilidades.innerText = "MOSTRAR MENOS"
    }
    else if (input_habilidades.checked == true) {
        a_habilidades.innerText = "MOSTRAR MAIS"
    }
})





// TEXT OF HABILITY

import { clicarEmCards } from "./text-habilidades.js"
document.querySelectorAll('.cards').forEach((ev)=>{ 
    ev.addEventListener('click', clicarEmCards) 
})


// BARRA DE PROGRESSO

import { indicaProgresso } from "./barra-de-progresso.js" 

window.onscroll = function() {
    indicaProgresso() 
}
