let readline = require("readline-sync");

let total = 0;
let v1 = 0;
let v2 = 0;

console.log("Programa que soma 2 numeros.");
v1 = parseInt(readline.question("Informe o 1° numero: ")); 
v2 = parseInt(readline.question("Informe o 2° numero: "));
total = v1 + v2;
console.log(v1 + (" + ") + v2 + (" = ") + total); 
