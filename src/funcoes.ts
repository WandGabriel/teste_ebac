function multiplicar(primeiroValor : number, segundoValor: number) {
    return primeiroValor * segundoValor;
}

function saudacao(nome: string) {
    return `Olá ${nome}`;
}

const resultado = multiplicar(3,2);
console.log (resultado);

const nome = 'Wanderson';
console.log (saudacao(nome));
