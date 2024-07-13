// string , number, undefined, null, boolean
const nome = 'Davi'; // string
const num1 = 10; // number
const num2 = 10.234; // number
let nomeAluno; // undefined -> nao aponta para local na memoria
let sobrenomeAluno = null; // nulo -> nao aponta para local na memoria
const aprovado = true; // boolean -> true or false
// impossível definir como undefined, apenas como null

console.log(typeof sobrenomeAluno, sobrenomeAluno); 

let a = 2;
const b = a;

console.log(a , b); //2 2

a = 3; 
console.log(a , b); //3 2