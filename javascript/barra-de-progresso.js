
// Barra de progresso

export function indicaProgresso() {

    const scroll = document.documentElement.scrollTop

    let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight

    let rolagem = (scroll / altura) * 100

    document.querySelector('#barra-de-scroll').style.width = rolagem + "%"
}