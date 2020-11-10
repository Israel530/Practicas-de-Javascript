function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularpar());
}

function Calcularpar(){
    var numero = Number(document.getElementById("Numero"));
    var imprimirpar = document.getElementById("Imprimir");


if(numero % 2 == 0){
    imprimirpar.innerText = numero + "El numero es Par";
}

else{
    imprimirpar.innerText = numero + "El numero es Inpar";
}
}