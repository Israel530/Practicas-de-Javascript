function EventListener(){
    document.getElementById("Calculardias").addEventListener("click", Calculardias())
}
function Calculardias(){

    var Dia = Number(document.getElementById("Dias").value);

    var Imprimirdias = (document.getElementById("alerta"));

    if(Dia == 1)
    Imprimirdias.innerText = "El dia seleccionado es: Lunes"

    if(Dia == 2)
    Imprimirdias.innerText = "El dia seleccionado es: Martes"

    if(Dia == 3)
    Imprimirdias.innerText = "El dia seleccionado es: Miercoles"

    if(Dia == 4)
    Imprimirdias.innerText = "El dia seleccionado es: Jueves"

    if(Dia == 5)
    Imprimirdias.innerText = "El dia seleccionado es: Viernes"

    if(Dia == 6)
    Imprimirdias.innerText = "El dia seleccionado es: Sabado"

    if(Dia == 7)
    Imprimirdias.innerText = "El dia seleccionado es: Domingo"
}