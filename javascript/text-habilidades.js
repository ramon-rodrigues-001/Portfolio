
// HABILIDADES   
export const clicarEmCards = function (ev) {

    const h1Inicial = document.querySelector('#titliInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(h1Inicial)

    const elemento = ev.currentTarget

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
    criar('HTML', 'Eu estudei por muito tempo html')
}
function css() {
    alert('css')
}
function javascript() {
    alert('javascript')
}
function sass() {
    alert('sass')
}
function bootstrap() {
    alert('bootstrap')
}
function python() {
criar('Python', 'AAah Python, a primeira linguagem de programação a qual tive contato passei muito tempo nesta linguagem aprendendo basicamente logica, as vezes volto e dou uma praticadinha, mais não é mais meu foco')
}
function git() {
    alert('git')
}
function typescript() {
    alert('typescript')
}
function bulma() {
    alert('bulma')
}


function criar(title, text) {
    const containerDeTexto = document.querySelector('#conteiner-resposta-abilidade')

    const h1 = document.createElement('h2')
    h1.innerText = title

    const p = document. createElement('p')
    p.innerText = text

    containerDeTexto.append(h1, p)
}