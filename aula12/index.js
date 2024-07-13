let varA = 'A'; // Valor de B
let varB = 'B'; // Valor de C
let varC = 'C'; // Valor de A
//const aux = varA;

//varA = varB;
//varB = varC;
//varC = aux;

[varA, varB , varC] = [varB, varC, varA];


console.log(varA, varB, varC);