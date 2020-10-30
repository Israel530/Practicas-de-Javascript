//Es el metodo que se agrega para utilizar una funcion en el boton
EventListener();

function EventListener(){
    //Obtiene el id del boton que esta en el html y va a estar atento cuando yo le de click al boton
    document.getElementById("Calcularedad").addEventListener("click", Calcularedad());
}

function CalcularEdad()
{
    //Obtener el id del imput pero con el .value obtenemos lo que ingresamos en el imput
    //El number indica que variable es
    var edad = Number(document.getElementById("edad").value;
    //se declara 1 para indicar que tiene INE y 0 si no tiene INE
    var INE = Number()
}