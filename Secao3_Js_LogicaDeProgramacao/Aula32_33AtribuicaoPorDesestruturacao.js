// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
      rua: 'Av Brasil',
      numero: 320
    }
  };
  
// Atribuição via desestruturação
// const { nome = '', sobrenome, ...resto } = pessoa;
// const { nome: n, sobrenome, ...resto } = pessoa;
// const { nome: n = '', sobrenome, ...resto } = pessoa;
// const { endereco: { rua, numero } } = pessoa;
/*
  const { 
    endereco, 
    endereco: { rua, numero } } = pessoa;
*/


const { nome, sobrenome, ...resto } = pessoa;

console.log(nome, resto);