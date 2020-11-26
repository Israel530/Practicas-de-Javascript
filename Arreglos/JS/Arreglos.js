function Arreglos(){

    var Arreglonumero = [1,2,50,68,4,8,3,5,6,5];
    var Arreglo = [2,5,6,7,0];
    var Arreglo2 = [1,2,3,11,22,3,5,111,33,24,1111];


    //agrego un numero al final del arreglo
    console.log(Arreglonumero.push(4));
    //se utiliza para ver si el 4 se agrego al arreglo
    console.log(Arreglonumero.slice());

    //agrega el numero 5 al inicio del arreglo y cuenta cuantos numeros son en total
    console.log(Arreglonumero.unshift(5));
    //se utiliza para ver si el 5 se agrego al arreglo
    console.log(Arreglonumero.slice());

    console.log(Arreglo.unshift(9));
    console.log(Arreglo.slice());
    console.log(Arreglo2);
    console.log(Arreglo2.sort());
}