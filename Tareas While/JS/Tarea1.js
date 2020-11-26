function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularnumero());
}

function Calcularnumero(){
    var imprimir = document.getElementById("Alerta");
    var x = Number(document.getElementById("Uno"));
    var x = Number(document.getElementById("Dos"));
    var x = Number(document.getElementById("Tres"));
    var x = Number(document.getElementById("Cuatro"));
    var x = Number(document.getElementById("Cinco"));
    var x = 0;


    for( x <= 0; x++;){
        imprimir.innerText = "Menores o iguales a 0"
    }

    for( x > 0; x++;){
        imprimir.innerText = "Mayores a 0"
    }
}