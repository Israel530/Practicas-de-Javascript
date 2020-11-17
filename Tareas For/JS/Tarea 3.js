function EventListener(){
    document.getElementById("Sucecion").addEventListener("click", Sucecionnumerica());
}

function Sucecionnumerica(){
    var Sucecion = document.getElementById("numeros");

    for(var x=10; x<=20; x+=2){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        Sucecion.appendChild(lista)
    }
}