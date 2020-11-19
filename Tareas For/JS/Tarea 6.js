function EventListener(){
    document.getElementById("Sucecion").addEventListener("click", Sucecionnumerica());
    document.getElementById("boton").addEventListener("click", Sucecion());
}

function Sucecionnumerica(){
    var Sucecion = document.getElementById("numeros");

    for(var x=5; x<=50; x+=5){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        Sucecion.appendChild(lista)
    }
}

function Sucecion(){
    var Sucecion = document.getElementById("listado");

    for(var x=5; x<=50; x++){
        if(x % 5 == 0){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        Sucecion.appendChild(lista)
    }
    }
}