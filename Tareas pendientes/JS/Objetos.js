function EventListener(){
    document.getElementById("boton").addEventListener("click", boton());
}

function boton(){
    var Imprimir = (document.getElementById("imprimir"));

    var Laptop = {
        Tamanio_pantalla: "32 pulgadas",
        Mouse: "Logitech",
        Teclado: "Razer",
        color: "Negro",
        Precio: "13,999.00"
    }

    var Celular = {
        Tamanio_pantalla: "6.1 pulgadas",
        color: "Negro",
        Peso: "0.365",
        Precio: "1699.01"
    }

    var Television = {
        Precio:"6699.00",
        Tamanio_pantalla: "40 pulgadas",
        Peso: "20.000",
        Altura:"59.20",
        Ancho: "12.00"
    }

    var SmartWatch = { 
        Ancho: "3.7",
        Altura: "1.08",
        Tamanio_pantalla: "52 pulgadas",
        Peso: "0.017"
    }

    var Aparatos_Electrónicos ={
        Marca1:"Samsung",
        Marca2:"Sony",
        Marca3:"LG",
        Marca4:"HP",
        Marca5:"Lenovo"
    }

    var Samsung = {
        Tamanio_pantalla: Celular.Tamanio_pantalla,
        color: Celular.color,
        Peso:Celular.Peso,
        Precio:Celular.Precio,
        Marca1:Aparatos_Electrónicos.Marca1,
    }
    
    var listado = document.createElement("li"); //Createelement crea un listado en el HTML. <li> </li>

    listado.setAttribute("class", "list-group-item"); //Creas el li y dentro de el creamos la clase <li class="list-group-item">

    listado.innerText = JSON.stringify(Samsung);

    Imprimir.appendChild (listado);
}
