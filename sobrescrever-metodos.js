var fruta = 'banana';
console.log(fruta);

console.log(fruta.bold())

//sobrescrevendo método nativo
String.prototype.bold = function() {
  console.log('<bold>' + this.toString() + '</bold>')
}

console.log(fruta.bold());

//Number.prototype;
//Boolean.prototype;