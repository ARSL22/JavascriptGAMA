class matematica {
 soma(valorA, valorB) {
    return valorA + valorB;  
}
subtracao(valorA, valorB) {
    return valorA - valorB;
}

}

var instanciaMatematica = new matematica();

var resultado = instanciaMatematica.soma(4, 7);
console.log(resultado);

