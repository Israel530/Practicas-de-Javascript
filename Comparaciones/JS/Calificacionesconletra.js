function EventListener(){
    document.getElementById("Imprimircali").addEventListener("click", Calcularcalificacion())
}

function Calcularcalificacion(){
    var calificaciones = document.getElementById("Calificacion").value;

    var Imprimircalificacion = (document.getElementById("alerta"));

    if(calificaciones == "A"){
        Imprimircalificacion.innerText = "Tu calificacion es: A";
    }

    if(calificaciones == "B"){
        Imprimircalificacion.innerText = "Tu calificacion es: B";
    }

    if(calificaciones == "C"){
        Imprimircalificacion.innerText = "Tu calificacion es: C";
    }

    if(calificaciones == "D"){
        Imprimircalificacion.innerText = "Tu calificacion es: D";
    }

    if(calificaciones == "F"){
        Imprimircalificacion.innerText = "Tu calificacion es: F";
    }
}