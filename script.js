var x = Number(prompt("escolha um numero"))
var resultado = e_multiplo_de_3(x)








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
function e_multiplo_de_3(numero){
    if(numero % 3 == 0){
        return "e multilplo de 3"
    }else{
      return "nao e multiplo de 3"  
    }
       
    
}