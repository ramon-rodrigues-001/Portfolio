
// HABILIDADES   
export const clicarEmCards = function (ev) {

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

function html() {
    alert('html')
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
    alert('python')
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