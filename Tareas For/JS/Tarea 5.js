function EventListener(){
    
    document.getElementById("Sucecion2").addEventListener("click2", Sucecionnumerica2());
}


function Sucecionnumerica2(){
    var Sucecion2 = document.getElementById("numeros2");
    
    for(var x=50; x>=5; x--){
    if(x % 3 == 0){
        var lista2 = document.createElement("li");
        lista2.setAttribute("class", "list-group-item");
        lista2.innerText = x
        Sucecion2.appendChild(lista2)
    }
    }
}