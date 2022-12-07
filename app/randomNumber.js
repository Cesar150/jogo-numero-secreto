const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = createRandomNumber()

function createRandomNumber(){
    return parseInt(Math.random() * maiorValor + 1);

}

const menorValorEl = document.querySelector('#menorValor');
menorValorEl.innerHTML = menorValor;
const maiorValorEl =document.querySelector('#maiorValor');
maiorValorEl.innerHTML = maiorValor;
console.log(numeroSecreto);
