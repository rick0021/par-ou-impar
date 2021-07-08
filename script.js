// var x = Number(prompt("escolha um numero"))
// var resultado = e_multiplo_de_5(x)



// escolha uma opcao:

// 1 - dobro
// 2 - metade
// 3 - multiplo de 3
// 4 - multiplo de 5
// 5 - descobrir se e par
var opcao = Number(prompt("escolha uma opcao de 1 a 5: \n 1:dobro \n 2:metade \n 3:multiplo de 3 \n 4:multiplo de 5 \n 5:par ou impar"))

if(opcao == 1){
    var numero = prompt("entre com um numero")
    var resultado = dobro(numero)
    mostra(resultado)
}
if(opcao == 2){
    var numero = prompt("entre com um numero")
    var resultado = metade(numero)
    mostra(resultado)
}
if (opcao == 3){
    var numero = prompt("entre com um numero")
    var resultado = e_multiplo_de_3(numero) 
    mostra(resultado)
}
if(opcao == 4){
    var numero = prompt("entre com um numero")
    var resultado = e_multiplo_de_5(numero)
    mostra(resultado)
}
if(opcao == 5){
    var numero = prompt("entre com um numero")
    var resultado = e_par(numero)
    mostra(resultado)
}










// mostra(resultado)






function dobro(numero){
    return numero*2
}

function metade(numero){
    return numero/2
}

function mostra(texto){
    alert(texto)
}

function e_par(numero){
    if(numero % 2 == 0){
        return  "e par"
    }else{
        return "e impar"
    }
}
function e_multiplo_de_3(numero){
    if(numero % 3 == 0){
        return "e multilplo de 3"
    }else{
      return "nao e multiplo de 3"  
    }   
}
function e_multiplo_de_5(numero){
    if(numero % 5 ==0){
        return "e multiplo de 5"
    }else{
        return "nao e multiplo de 5"
    }
}
