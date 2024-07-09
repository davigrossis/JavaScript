/*
Davi Grossi Soares de Souza tem 21 anos, pesa 68kg
tem 1,7 de altura e seu IMC é de 25.9323923948
Davi Grossi nasceu em 2003
*/

const nome = 'Davi Grossi';
const sobrenome ='Soares de Souza';
const idade = 21;
const peso = 68;
const altura =1.70;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(nome+ ' ' + sobrenome + ' tem '+ idade + ' anos, pesa '+ peso +'kg')
console.log( `tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);