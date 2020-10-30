//Esta funcion se encarga de mandar llamar al boton con la instruccion addEventListened
//Hay que tener cuidado con los id de el input y en el boton y con el nombre de la function
function eventlistened(){
    document.getElementById("Calcularprecio").addEventListener("click",CalcularPrecio());
}

function CalcularPrecio(){

    var Calcularprecio = Number(document.getElementById("Precio").value);

    var imprimirdescuento1 = document.getElementById("Descuento1");
    var imprimirdescuento2 = document.getElementById("Descuento2");

    var Descuento1 = .84;
    var Descuento2 = .93;
    var precio = 0;
    var ahorro = 0;
    

    if(Calcularprecio > 3600){
        precio = Calcularprecio * .84;
        ahorro = Calcularprecio - precio;
        imprimirdescuento1.innerText = "Con descuento de 16%:" + precio + "Ahorraste:" + ahorro;
        console.log(precio, ahorro)
    }
//else significa que no se cumple if
    else{
        precio = Calcularprecio * .93;
        ahorro = Calcularprecio - precio;
        imprimirdescuento2.innerText = "Con descuento de 7%:" + precio + "Ahorraste:" + ahorro;
    }
    
}