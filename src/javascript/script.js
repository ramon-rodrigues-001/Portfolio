
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




// MUDAR DESCRIÇÃO DO PROJETO DE ACORDO COM INPUT CHECHECK

function criar_Descrition(title, text, [...icones]) {
    const container_De_Descrition = document.querySelector('#descrition-of-project')
    container_De_Descrition.innerText = ''

    const h2 = document.createElement('h2')
    h2.id = 'title-descrition-of-project'
    h2.dataset.aos = 'flip-right'

    const span = document.createElement("span")
    span.classList.add("span-azulMarinho")
    span.innerText = title

    const p = document.createElement('p')
    p.innerText = text
    p.id = 'paragrafh-descrition-of-project'
    p.dataset.aos = 'flip-right'


    const divIcones = document.createElement('div')
    icones.forEach((e)=> {
        // <img src="" alt=""></img>
        const icon = document.createElement('img')
        icon.src = `${e}`
        icon.classList.add("icones-de-desenvolvimento")
        divIcones.appendChild(icon)
    })


    h2.appendChild(span)
    container_De_Descrition.appendChild(h2)
    container_De_Descrition.appendChild(p)
    container_De_Descrition.appendChild(divIcones)
}


const input_slider_1 = document.querySelector('#input-slider-1').addEventListener('change', ()=> {
    criar_Descrition("God Of War", "O projeto consiste em uma página de informações sobre o jogo 'God of War Ragnarök', que apresenta modo de jogar, personagens e trailer. Este projeto tem como foco o desenvolvimento da interfaçe não tendo um back-end robusto. Para a criação utilizei as tecnologias HTML, CSS, Sass, Bootstrap e JavaScript.")
})

const input_slider_2 = document.querySelector('#input-slider-2').addEventListener('change', ()=> {
    criar_Descrition("Blizzard", "Inspirado na página de jogos da Blizzard, este é considera por mim o meu projeto mais bonito sendo tambem o meu favorito, foi possível implementar soluções criativas e adaptá-las às necessidades do projeto. Tecnologias HTML, CSS, JavaScript, Sass e Bootstrap")
})

const input_slider_3 = document.querySelector('#input-slider-3').addEventListener('change', ()=> {
    criar_Descrition("Leitor Livre", "Este é o projeto mais grandioso que já empreendi, representando também a maior fonte de aprendizado e aprimoramento das minhas habilidades. Trata-se de um website dedicado a disponibilizar gratuitamente livros em formato PD", ["public/icons8-html-5-50.png"])
})