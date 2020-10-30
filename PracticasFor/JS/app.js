function SecuencialNumeros(){

    var imprimirnumerospar = document.getElementById("ImprimirNumero")

    for(var x=10; x < 20; x+=2){
        console.log(x);
        imprimirnumerospar.innerText = x;
    }
}