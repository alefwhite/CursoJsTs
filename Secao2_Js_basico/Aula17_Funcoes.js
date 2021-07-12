// Funções

// Funcao sem parametros
function saudacao() {
    console.log('Bom dia')
}

// executando a função
saudacao()


// Funcao com parametros
function saudacaoDois(nome) {
    console.log('Bom dia', nome)
}

// executando a função
saudacaoDois('Alef')


// Funcao com retorno
function saudacaoTres(nome = 'Valo Padrao') {
    return `Bom dia ${nome}`
}

const variavel = saudacaoTres('Alef')
console.log(variavel)

// Funcao Anonima
const raiz = function (n = 3) {
    return n ** 0.5;
};
console.log(raiz(5))

// Arrow Function
const raizArrow = n => n ** 0.5;
console.log(raizArrow(5))
