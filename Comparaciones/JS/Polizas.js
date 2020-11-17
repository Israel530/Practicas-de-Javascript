function EventListener(){
    document.getElementById("Poliza").addEventListener("Click", Botonpoliza());
}

function Botonpoliza(){

var Coberturas = document.getElementById("Coberturas").value;
var Estilodevida = document.getElementById("Estilodevida").value;
var Edad = Number (document.getElementById("Edad").value);
var Imprimirpoliza = document.getElementById("Imprimirpoliza");

var Poliza = 0


if(Coberturas == "A" && Estilodevida == "1" && Edad > 40){
    Poliza = 1200 + 120 + 240;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "A" && Estilodevida == "2" && Edad > 40){
    Poliza = 1200 + 60 + 240;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "A" && Estilodevida == "3" && Edad > 40){
    Poliza = 1200 + 60 + 240;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "A" && Estilodevida == "1" && Edad < 40){
    Poliza = 1200 + 120 + 120;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "A" && Estilodevida == "2" && Edad < 40){
    Poliza = 1200 + 60 + 120;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "A" && Estilodevida == "3" && Edad < 40){
    Poliza = 1200 + 60 + 120;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "B" && Estilodevida == "1" && Edad > 40){
    Poliza = 950 + 120 + 240;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "B" && Estilodevida == "2" && Edad > 40){
    Poliza = 950 + 60 + 240;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "B" && Estilodevida == "3" && Edad > 40){
    Poliza = 950 + 60 + 240;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "B" && Estilodevida == "1" && Edad < 40){
    Poliza = 950 + 120 + 120;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "B" && Estilodevida == "2" && Edad < 40){
    Poliza = 950 + 60 + 120;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}

if(Coberturas == "B" && Estilodevida == "3" && Edad < 40){
    Poliza = 950 + 60 + 120;
    Imprimirpoliza.innerText = "Total a pagar:" + Poliza;
}
}