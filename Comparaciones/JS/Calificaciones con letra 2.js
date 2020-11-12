function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularcalificaciones())
}
function Calcularcalificaciones(){

    var calificaciones = Number(document.getElementById("Calificacion").value);

    var Imprimircalificacion = (document.getElementById("alerta"));

    if(calificaciones == 10){
        Imprimircalificacion.innerText = "Tu calificacion es: A";
    }

    if(calificaciones == 9){
        Imprimircalificacion.innerText = "Tu calificacion es: B";
    }

    if(calificaciones == 8){
        Imprimircalificacion.innerText = "Tu calificacion es: C";
    }

    if(calificaciones == 7){
        Imprimircalificacion.innerText = "Tu calificacion es: D";
    }

    if(calificaciones == 6){
        Imprimircalificacion.innerText = "Tu calificacion es: D";
    }

    if(calificaciones == 5){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }

    if(calificaciones == 4){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }

    if(calificaciones == 3){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }

    if(calificaciones == 2){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }

    if(calificaciones == 1){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }

    if(calificaciones == 0){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }
}