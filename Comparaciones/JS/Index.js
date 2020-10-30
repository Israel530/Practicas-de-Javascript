function calcularcals(){

    var califi1 = Number(document.getElementById("cal1").value);
    var califi2 = Number(document.getElementById("cal2").value);
    var califi3 = Number(document.getElementById("cal3").value);
    var califi4 = Number(document.getElementById("cal4").value);

    var imprimirvalorminimo = document.getElementById("valorminimo")
    var imprimirpromedio = document.getElementById("promedio")

    var valorminimo = 0;
    var promedio = 0;

    if(califi1 < califi2 && califi1 < califi3 && califi1 < califi4){
        //math matematicas
        //min minimo
        //math.min = obtener el valor minimo de una serie de numeros
        valorminimo = Math.min(califi1, califi2, califi3, califi4);
        promedio = (califi2 + califi3 + califi4) / 3;
        imprimirvalorminimo.innerText = "La calificacion minima es:" +  valorminimo;
        imprimirpromedio.innerText = "El promedio de las notas mas altas son:" + promedio;
    }

    if(califi2 < califi1 && califi2 < califi3 && califi2 < califi4){
        valorminimo = Math.min(califi1, califi2, califi3, califi4);
        promedio = (califi1 + califi3 + califi4) / 3;
        imprimirvalorminimo.innerText = "La calificacion minima es:" + valorminimo;
        imprimirpromedio.innerText = "El promedio de las notas mas altas son:" +  promedio;
    }

    if(califi3 < califi1 && califi3 < califi2 && califi3 < califi4){
        valorminimo = Math.min(califi1, califi2, califi3, califi4);
        promedio = (califi1 + califi2 + califi4) / 3;
        imprimirvalorminimo.innerText = "La calificacion minima es:" + valorminimo;
        imprimirpromedio.innerText = "El promedio de las notas mas altas son:"  + promedio;
    }

    if(califi4 < califi1 && califi4 < califi2 && califi4 < califi3){
        valorminimo = Math.min(califi1, califi2, califi3, califi4);
        promedio = (califi1 + califi2 + califi3) / 3;
        imprimirvalorminimo.innerText = "La calificacion minima es:"  + valorminimo;
        imprimirpromedio.innerText = "El promedio de las notas mas altas son:"  + promedio;
    }
}
