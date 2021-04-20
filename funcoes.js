
//se não passar valor por parametro, vai assumir o valor padrão 'mergulhador'
function greet (name = 'mergulhador') {
  return 'Boa noite, ' + name;
}

console.log(greet());

var mensagem = greet('Marcos');
console.log(mensagem);


//função sem retorno
function greet2() {
  console.log('Boa noite, filhão!!!');
}

greet2();