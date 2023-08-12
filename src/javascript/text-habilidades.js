
// HABILIDADES   
export const clicarEmCards = function (ev) {

    const h1Inicial = document.querySelector('#titliInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(h1Inicial)
    const paragrafInicial = document.querySelector('#paragrafInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(paragrafInicial)
    
    let elemento = ev.currentTarget

    switch (elemento.id) {
        case 'hab-1':
            html()
            break
        case 'hab-2':
            css()
            break
        case 'hab-3':
            javascript()
            break
        case 'hab-4':
            sass()
            break
        case 'hab-5':
            bootstrap()
            break
        case 'hab-6':
            python()
            break
        case 'hab-7':
            node()
            break
        case 'hab-8':
            mongo()
            break
        case 'hab-9':
            express()
            break
    }
}

const text = document.querySelector('#text-resposta')

function html() {
    criar('HTML5', 'O esqueleto do projeto é o que dá a base para o desenvolvimento da aplicação. Com boas práticas é possível criar um projeto consistente e padronizado, isso torna a aplicação mais fácil de ser entendida e mantida no futuro, além de garantir uma melhor experiência para o usuário final.')
}
function css() {
    criar('CSS', '(Cascading Style Sheets) é uma linguagem que define o estilo e a aparência de elementos em páginas web HTML.. deixando o site atraente, ainda mais com sua exteção o SASS')
}
function javascript() {
    criar('JavaScript', '(JS) esta é força motriz por trás da magia interativa na web, capacitando páginas a ganharem vida com animações deslumbrantes, validação de formulários instantânea e dinamismo que cativa os visitantes. É a ferramenta essencial para transformar ideias em experiências cativantes e envolventes na internet.')
}
function sass() {
    criar('Sass', 'O SASS é uma ferramenta verdadeiramente impressionante! Ao viabilizar a criação de folhas de estilo altamente organizadas e de fácil manutenção, ele encurta consideravelmente o tempo e esforço exigidos para efetuar alterações e atualizações, resultando em um fluxo de trabalho mais eficiente e menos complicado.')
}
function bootstrap() {
    criar('Bootstrap', 'Esta ferramneta busca agilizar o processo de criação de interfaces web, tornando-o mais eficiente, produtivo e consistente.')
}
function python() {
    criar("React", 'Iniciei recentemente os estudos em React, após ter concluído o curso avançado de JavaScript da OneBitCode. A proposta dessa tecnologia é incrível e considero que seja o próximo passo para aperfeiçoar meus conhecimentos. Dessa forma, pretendo refazer meus projetos utilizando essa ferramenta poderosa.')
}
function node() {
    criar('Node', 'Node.js revolucionou o uso do JavaScript ao possibilitar a criação de servidores escaláveis e aplicações de alto desempenho, com arquitetura baseada em eventos para serviços web rápidos e em tempo real.')
}
function mongo() {
    criar('MongoDB', "MongoDB, meu primeiro banco de dados estudado, é uma poderosa plataforma NoSQL orientada a documentos, oferecendo flexibilidade única, escalabilidade e capacidade de lidar com estruturas de dados variáveis, tornando-o uma escolha moderna para aplicações adaptáveis e eficientes de gerenciamento de dados.")
}
function express() {
    criar('Express', "Express é um framework minimalista para Node.js que simplifica a criação de aplicações web robustas e eficientes, oferecendo recursos como roteamento, gerenciamento de requisições e respostas, tornando o processo de desenvolvimento mais ágil e estruturado.")
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