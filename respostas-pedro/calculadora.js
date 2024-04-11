const prompt = require('prompt-sync')();

class Calculadora {
  constructor(primeironumero, segundonumero) {
    this.primeironumero = primeironumero   ;
    this.segundonumero = segundonumero;
  }

  somar() {
    return this.primeironumero + this.segundonumero;
  }

  subtrair() {
    return this.primeironumero - this.segundonumero;
  }

  multiplicar() {
    return this.primeironumero * this.segundonumero;
  }

  dividir() {
    if (this.segundonumero !== 0) {
      return this.primeironumero / this.segundonumero;
    } else {
      return 'Erro: Divisão por zero';
    }
  }
}

let primeironumero = parseInt(prompt('Digite o primeiro número: '));
let segundonumero = parseInt(prompt('Digite o segundo número: '));

if (!isNaN(primeironumero) && !isNaN(segundonumero)) {
  let minhaCalculadora = new Calculadora(primeironumero, segundonumero);
  console.log('Soma:', minhaCalculadora.somar());
  console.log('Subtração:', minhaCalculadora.subtrair());
  console.log('Multiplicação:', minhaCalculadora.multiplicar());
  console.log('Divisão:', minhaCalculadora.dividir());
} else {
  console.log('Por favor, insira dois números válidos.');
}
