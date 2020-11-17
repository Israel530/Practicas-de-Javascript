function EventListener(){
    document.getElementById("Sucecion").addEventListener("click", Sucecionnumerica());
}

function Sucecionnumerica(){
    var Sucecion = document.getElementById("numeros");

    for(var x=50; x>=5; x-=3){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        Sucecion.appendChild(lista)
    }
}