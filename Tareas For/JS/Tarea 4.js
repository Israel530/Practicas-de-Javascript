function EventListener(){
    document.getElementById("Sucecion").addEventListener("click", Sucecionnumerica());
}

function Sucecionnumerica(){
    var Sucecion = document.getElementById("numeros");

    for(var x=15; x>=5; x--){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        Sucecion.appendChild(lista)
    }
}