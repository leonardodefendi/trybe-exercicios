// Calcular o salario liquido com base no INSS e imposto de renda
// Verificar a aliquota do inss
// verificar a aliquota do ir



let salarioBruto=6000;
let inss;
let salarioLiquido;
let faixa1Inss=1556.94;
let faixa2Inss=2594.92;
let faixa3Inss= 5189.82;
let faixa4inss= 5189.83;
let faixa1Ir= 1903.98;
let faixa2Ir=2826.65;
let faixa3Ir= 3751.05;
let faixa4Ir= 4664.68;
let faixa5Ir= 4554.68;

if(salarioBruto <= faixa1Inss){
  inss=salarioBruto*0.08;
}
else if(salarioBruto <= faixa2Inss){
  inss=salarioBruto*0.09;
}
else if(salarioBruto <= faixa3Inss){
  inss=salarioBruto*0.11;
}
else{
  inss=570.88;
}

let baseSalario = salarioBruto - inss;

if(baseSalario <= faixa1Ir){
  salarioLiquido = baseSalario;
}
else if(baseSalario <= faixa2Ir ){
  salarioLiquido =baseSalario - (baseSalario*0.075) - 142.80;
}
else if(baseSalario <= faixa3Ir ){
  salarioLiquido =baseSalario - (baseSalario*0.15) - 354.80;
}
else if(baseSalario <= faixa4Ir ){
  salarioLiquido =baseSalario - (baseSalario*0.225) - 636.13;
}
else if(baseSalario >= faixa5Ir ){
  salarioLiquido =baseSalario - (baseSalario*0.275 - 869.36);
}

console.log("O Salario recebido é : " + salarioLiquido);










