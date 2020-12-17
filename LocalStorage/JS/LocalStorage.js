function LocalStorage(){
    //Utiliza la palabra reservada Localstorage y para guardar la informacion usamos Setitem("Key", "Value")
    localStorage.setItem("Nombre", "Israel Nuñez");
    localStorage.setItem("Numero", 30);
    localStorage.setItem("Booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);
    
    var Ropa = {
        Calzado:"Tenis",
        Calzado2: "Pantuflas",
        Calzado3: "Chanclas",
        Jens: "Pantalon de Mezclilla",
    };


    localStorage.setItem("Objeto", JSON.stringify(Ropa));
    
    //Imprimo en consola la clave que tengo en el Localstorage
    console.log(localStorage.getItem("Nombre"));

    
}