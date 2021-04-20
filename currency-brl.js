var valor = 100;

console.log(valor);

var valorFormatado = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valorFormatado);