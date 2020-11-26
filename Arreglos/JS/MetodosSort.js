function Ordenarnumeros(){
    document.getElementById("btnordenar").addEventListener("click", Ordenarnumeros());
}

function Ordenarnumeros(){

    var Arreglonumerico = [1,4,2,9,11,44,111,7,4];
    var imprimirmenoramayor = document.getElementById("imprimirmenoramayor");
    var imprimirmayoramenor = document.getElementById("imprimirmayoramenor");
    
    //Ordenar alfabeticamente los numeros.
    Arreglonumerico.sort();
    //Crea una funcion en el metodo sort para poder ordenar los numero de menor a mayor
    imprimirmenoramayor.innerText = Arreglonumerico.sort(MenorAMayor);  //1,2,4,4,7,9,11,111
    //Crea una funcion en el metodo sort para poder ordenar los numero de mayor a menor
    imprimirmayoramenor.innerText = Arreglonumerico.sort(MayorAMenor);
}
//Funcion que permite ordenar de menor a mayor el arreglo
function imprimirmenor(elem1, elem2){
    return elem1 = elem2;
}

function imprimirmayor(elem1, elem2){
    return elem2 = elem1;
}