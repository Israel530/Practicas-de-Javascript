function EventListener(){
    document.getElementById("Sucecion").addEventListener("click", Sucecionnumerica());
}

function Sucecionnumerica(){
    var Sucecion = document.getElementById("numeros");

    for(var x=1; x<=16; x+=3){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        Sucecion.appendChild(lista)
    }
}