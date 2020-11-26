function BotonOrden(){
    document.getElementById("boton").addEventListener("click", BotonOrden());
    document.getElementById("boton2").addEventListener("click", BotonOrden2());
}

function BotonOrden(){

    var Ordenalfabetico1 = [ "Moto","soto","Abaco","abeja","Sapo","nieve","Zumba","barco"];
    var imprimirordenalfabetico = document.getElementById("Imprimirorden");

    Ordenalfabetico1.sort();
    imprimirordenalfabetico.innerText = Ordenalfabetico1.sort();

}

function BotonOrden2(){

    var Ordenalfabetico2 = ["bicicleta","silla","cama","computadora","celular","viento","salmon","pared"];
    var imprimirordenalfabetico2 = document.getElementById("Imprimirorden2");

    Ordenalfabetico2.sort();
    imprimirordenalfabetico2.innerText = Ordenalfabetico2.sort();
}