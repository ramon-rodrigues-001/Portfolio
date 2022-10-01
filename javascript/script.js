let input_projetos = document.querySelector('input#mais-projetos')
let a = document.querySelector('a#btn-mais-projetos')

function mostrar() {
    if (input_projetos.checked == false) {
        a.innerHTML = "MOSTRAR MENOS"
    }
    else if (input_projetos.checked == true) {
        a.innerHTML = "MOSTRAR MAIS"
    }
}