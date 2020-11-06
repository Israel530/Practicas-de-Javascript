function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularpresupuesto())
}

function Calcularpresupuesto(){

    var presupuesto = Number(document.getElementById("Presupuesto").value);
    var precio1 = Number(document.getElementById("Precio1").value);
    var precio2 = Number(document.getElementById("Precio2").value);
    var precio3 = Number(document.getElementById("Precio3").value);
    var precio4 = Number(document.getElementById("Precio4").value);
    var imprimirCalcularprecio = (document.getElementById("suma"));
    var imprimirResultado = (document.getElementById("alerta"));
    
    var suma = precio1 + precio2 +precio3 + precio4;

    if(suma < presupuesto){
        imprimirCalcularprecio.innerText = "La suma es:" + suma;
        imprimirResultado.innerText = presupuesto + "Si le alcanza el presupuesto";
        }
    else{
        imprimirCalcularprecio.innerText = "La suma es:" + suma;
        imprimirResultado.innerText = presupuesto + "No le alcanza el presupuesto";
    }
}