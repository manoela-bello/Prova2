//1-Como título do site coloque seu nome.
//2-Crie um programa no qual o usuário escreva seu nome e devolva uma mensagem dizendo "Olá, <nomeDoUsuário>, tudo bem?"
let nome = document.getElementById("a")
let texto = document.getElementById("texto")

function Enviar()
{
    texto.innerHTML = "Olá, " + nome.value + ", tudo bem?"
}

//3-Faça um programa que leia o valor em centimetros e converta em metros.
let centimetros = document.getElementById("b")
let metros = document.getElementById("c")

function Converter(){ 
    if(centimetros){
        metros.innerHTML = (parseInt(centimetros.value)) / 100 + " m."
    }
}

//4-Escreva um programa que leia o número e me mostre o seu anterior e sucessor.
let d = document.getElementById("d");
let an = document.getElementById("anterior");
let su = document.getElementById("sucessor");

function Mostrar(){
    an.innerHTML = parseInt(d.value) - 1;
    su.innerHTML = parseInt(d.value) + 1;
}

//5-Escreva um programa que leia dois números e mostre na tela o maior.
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let resposta = document.getElementById("resposta");

function Comparar(){
    
    if( n1.value > n2.value){
        resposta.innerHTML = parseInt(n1.value);
    }
    else{
        resposta.innerHTML = parseInt(n2.value);
    }
}


//6-Escreva um programa que pergunte o salário do funcionário e calcule o valor do aumento. Para salários acima de $1250, calcule um aumento de 10%. Para inferiores, 15%.
let x = document.getElementById("x");
let salario = document.getElementById("resultado");

function Verificar(){
    if(x > 1250){
        salario.innerHTML = (parseInt(x.value)) + 125;
    }
    else{
        salario.innerHTML = (parseInt(x.value)) + 187;
    }
}

//7-Faça um programa que exiba números de 1 a 100.
var c = 1;
while(c <= 100){
    console.log(c)
    c = c + 1;
}


//8-Faça um programa que exiba números de 0 a 50, pulando de 5 em e. EX: 0, 5, 10, 15.
var c = 0;
while(c <= 50){
    console.log(c)
    c = c + 5;
}

//9-Faça uma contagem regressiva do 100 ao 0, pulando de 10 em 10. EX: 100, 90, 80.
var c = 100;
while(c >= 0){
    console.log(c)
    c = c - 10;
}

