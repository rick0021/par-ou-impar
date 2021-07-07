var x = Number(prompt("escolha um numero"))
var resultado = e_par(x)








mostra(resultado)






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
