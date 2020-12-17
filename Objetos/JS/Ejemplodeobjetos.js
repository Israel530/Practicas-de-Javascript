function Objetos(){

    var coche1 = {
        ruedas: 4,
        puertas: 2,
        color: "verde",
        
        luces: 4,
        espejo: 2,
    };
    //Indica que termino la instruccion y podemos crear otra aparte.

    var coche2 = {
        ruedas: 4,
        puertas: 4,
        color: "gris",
        
        luces: 4,
        espejo: 2,
    };

    var coche3  = {
        ruedas: 4,
        puertas: 2,
        color: "azul",
        
        luces: 4,
        espejo: 2,
    };

    var coche4  = {
        ruedas: 4,
        puertas: 2,
        color: "negro",
        
        luces: 4,
        espejo: 2,
    };

    var fabricante = {
        marca1: "Nissan",
        modelo1: "Nissan Silvia",
        anio1: 2010,

        marca2: "Ford",
        modelo2: "Ford Focus",
        anio2: 2020,

        marca3: "Aston martin",
        modelo3: "Aston martin DB9",
        anio3: 2014,

        marca4: "Toyota",
        modelo4: "Toyota Supra",
        anio4: 2018,
    };


    var Nissan = {
        ruedas: coche1.ruedas,
        puertas: coche1.puertas,
        color: coche1.color,
        anio: fabricante.anio1,
        luces: coche1.luces,
        espejo: coche1.espejo,
        marca: fabricante.marca1,
        modelo: fabricante.modelo1
    };
    console.log(Nissan);
    console.log(Nissan.espejo);
    console.log(Nissan.luces);
    console.log(Nissan.color);



    var Ford = {
        ruedas: coche2.ruedas,
        puertas: coche2.puertas,
        color: coche2.color,
        anio: fabricante.anio2,
        luces: coche2.luces,
        espejo: coche2.espejo,
        marca: fabricante.marca2,
        modelo: fabricante.modelo2
    };
    console.log(Ford);
    console.log(Ford.puertas);
    console.log(Ford.ruedas);
    console.log(Ford.anio);



    var Chevrolet = {
        ruedas: coche3.ruedas,
        puertas: coche3.puertas,
        color: coche3.color,
        anio: fabricante.anio3,
        luces: coche3.luces,
        espejo: coche3.espejo,
        marca: fabricante.marca3,
        modelo: fabricante.modelo3
    }
    console.log(Chevrolet);
    console.log(Chevrolet.espejo);
    console.log(Chevrolet.luces);
    console.log(Chevrolet.color);



    var Kia = {
        ruedas: coche4.ruedas,
        puertas: coche4.puertas,
        color: coche4.color,
        anio: fabricante.anio4,
        luces: coche4.luces,
        espejo: coche4.espejo,
        marca: fabricante.marca4,
        modelo: fabricante.modelo4
    }
    console.log(Kia);
    console.log(Kia.puertas);
    console.log(Kia.ruedas);
    console.log(kia.anio);
}