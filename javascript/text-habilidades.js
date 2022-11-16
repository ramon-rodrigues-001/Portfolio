
// HABILIDADES   
export const clicarEmCards = function (ev) {

    const h1Inicial = document.querySelector('#titliInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(h1Inicial)
    const paragrafInicial = document.querySelector('#paragrafInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(paragrafInicial)
    
    let elemento = ev.currentTarget

    switch (elemento.id) {
        case 'h1':
            html()
            break
        case 'h2':
            css()
            break
        case 'h3':
            javascript()
            break
        case 'h4':
            sass()
            break
        case 'h5':
            bootstrap()
            break
        case 'h6':
            python()
            break
        case 'h7':
            git()
            break
        case 'h8':
            typescript()
            break
        case 'h9':
            bulma()
            break
    }
}

const text = document.querySelector('#text-resposta')

function html() {
    criar('HTML5', 'O esqueleto do projeto blablabla Facil para dedeu')
}
function css() {
    criar('CSS', 'Esse vai dar uma boa dor de cabeça kkkk, Brincadeira CSS é a melhor parte.')
}
function javascript() {
    criar('JavaScript', 'Estou nesmo momento estudando javascript, afinal não tem fim, estou a todo momento estarei estudando essa linguagem incrivel')
}
function sass() {
    criar('Sass', 'Que feramenta massa, estilizar fica muito mais intuitiva com ela')
}
function bootstrap() {
    criar('Bootstrap', 'Ao')
}
function python() {
criar('Python', 'AAah Python, a primeira linguagem de programação a qual tive contato passei muito tempo nesta linguagem aprendendo basicamente logica, as vezes volto e dou uma praticadinha, mais não é mais meu foco')
}
function git() {
    criar('Git')
}
function typescript() {
    criar('TypeScript')
}
function bulma() {
    criar('bulma')
}


function criar(title, text) {
    const containerDeTexto = document.querySelector('#conteiner-resposta-abilidade')

    const h1 = document.createElement('h2')
    h1.innerText = title
    h1.id = 'titliInicial'
    h1.dataset.aos = 'flip-right'

    const p = document. createElement('p')
    p.innerText = text
    p.id = 'paragrafInicial'
    p.dataset.aos = 'flip-right'

    containerDeTexto.append(h1, p)
}