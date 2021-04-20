var person1 = {
  name: 'Marcos',
  age: 30
}

var person2 = {
  name: 'Vaniele',
  age: 23
}

var person3 = {
  name: 'Marcela',
  age: 27
}

var list = [person1, person2, person3];

//acessando objeto de indice 0 e obtendo o valor do atributo name
console.log(list[0].name);

//iterando sobre o array
for (var person of list) {
  console.log(person);
}

//uma lista pode ter objetos de tipos diferentes
var list2 = ['banana', 'goiaba', 20, true];
list2.push(30);
console.log(list2);

