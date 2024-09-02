function Moradia(nomeDono, local, valor) {
    this.nomeDono = nomeDono;
    this.local = local;
    this.valor = valor;
}

function Casa(nomeDono, local, valor, tipo, tamanho) {
    Moradia.call(this, nomeDono, local, valor);
    this.tipo = tipo;
    this.tamanho = tamanho;
}

function Apartamento (nomeDono, local, valor, tipo, tamanho, andar, numeroApartamento) {
    Moradia.call(this, nomeDono, local, valor);
    this.tipo = tipo;
    this.tamanho = tamanho;
    this.andar = andar;
    this.numeroApartamento = numeroApartamento;
}

const casaDaMaria = new Casa("Maria","XPTO", 150000, 'Residencial', 90);
const casaDoPedro = new Casa("Pedro","Rua do Java", 100000, 'Comercial', 150);
const casaDaLucia = new Apartamento("Lucia", "Av. do Bootstrap", 200000, '2 quartos', 40, 6, 603);
const casaDoJoaozinho = new Apartamento("João", "Complexo CSS", 550000, '3 quartos', 150, 13, 1302);

console.log (casaDaMaria);
console.log (casaDoPedro);
console.log (casaDaLucia);
console.log (casaDoJoaozinho);
