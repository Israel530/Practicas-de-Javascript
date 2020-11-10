function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularedades())
}
function Calcularedades(){

    var Edad1 = Number(document.getElementById("Primeraedad").value);
    var Edad2 = Number(document.getElementById("Segundaedad").value);

    var imprimirmayor = document.getElementById("Edadmayor");
    var imprimirdiferencia = document.getElementById("Diferencia");

    var Edadmayor = 0;
    var Diferencia = 0;

    if(Edad1 > Edad2){
        Edadmayor = Math.max(Edad1, Edad2);
        Diferencia = (Edad1 - Edad2);
    imprimirmayor.innerText = "La edad mayor es:" + Edadmayor;
    imprimirdiferencia.innerText = "La diferencia de edad es:" + Diferencia;
    }

    else{
        Edadmayor = Math.max(Edad1, Edad2);
        Diferencia = (Edad2 - Edad1);
        imprimirmayor.innerText = "La edad mayor es:" + Edadmayor;
        imprimirdiferencia.innerText = "La diferencia de edad es:" + Diferencia;
    }
}