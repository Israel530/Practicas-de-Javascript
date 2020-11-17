function EventListener(){
    //Mandar llamar al boton 1
    document.getElementById("click").addEventListener("click", Darleclick());
    //Mandar llamar al boron 2
    document.getElementById("click2").addEventListener("click", Darleclick2());
    //Mandar llamar al boton 3
    document.getElementById("click3").addEventListener("click", Darleclick3());
}
//la funcion primer boton
function Darleclick(){
    var salida = document.getElementById("salida1");

    //document.createelement se utiliza para crear una etiqueta desde javascript
    var button = document.createElement("button");

    //La instrucciones set attribute llamamos a la clase para darle forma al boton
    button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2"); // = class="class", "btn btn-primary btn-lg btn-block mt-2"
    button.setAttribute("id", "boton"); // = id="boton"
    button.setAttribute("type", "button"); // = type = "button"
    button.setAttribute("onclick", "click2()"); // = onclick=("click2()")

    //Se utiliza para imprimir imformacion en la etiqueta(boton);
    button.innerText = "Boton Impreso";

    //Se utiliza para imprimir el boton creado
    salida.appendChild(button);
}

//la funcion del segundo boton
function Darleclick2(){
    var salida2 = document.getElementById("salida2");

    //inicializar una variable con un 0, imprimir 5 veces un boton, se requiere un contenedor para poder hacer un ciclo
    for(var x=0; x < 5; x++){
        //
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
        button.setAttribute("id", "button");
        button.setAttribute("type", "button");
        button.setAttribute("onclick", "click2()");
        button.innerText = "Varios botones impresos";
        salida2.appendChild(button);
    }
}

function Darleclick3(){
    //var salida3 = document.getElementById("salida3");
    var listado = document.getElementById("Listado");

    for(var x=0; x<5; x++){

    var lista = document.createElement("li");
    
    lista.setAttribute("class", "list-group-item");
    lista.innerText = x
    //en este caso .appendChild busca el listado en el HTML y dentro del li imprime.
    listado.appendChild(lista)
}
}