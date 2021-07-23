for(let i = 0; i <= 10; i++) 
    console.log(`${i % 2 === 0 ? 'Par' : 'Impar'}`)

const frutas = ['Maçã', 'Pêra', 'Uva'];
const novasFrutas = frutas.map(el => el.toLowerCase());
console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]