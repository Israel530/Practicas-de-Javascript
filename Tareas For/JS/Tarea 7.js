function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularpareseinpares());
}

function Calcularpareseinpares(){
    var imprimirpares = document.getElementById("alerta");
    var imprimirpromedio = document.getElementById("alerta2")
    var contador = 0;
    var contador2 = 0;
    var sumadepares = 0;
    var sumadeimpares = 0;
    var promedio = 0;

    for(var x=1; x<=30; x++){
        var introduce = Number(prompt("Ingresa un numero"));
        if(introduce > 0 && introduce % 2 == 0){
            contador++;
            sumadepares = introduce + sumadepares;
            promedio = sumadepares / contador;
        }
    else{
        contador2++;
        sumadeimpares = introduce + sumadeimpares;
    }
    imprimirpromedio.innerText = "El promedio de los numeros pares es:" + " " + promedio;
    imprimirpares.innerText = "La suma de los numeros impares es:" + " " + sumadepares; 
    }
}