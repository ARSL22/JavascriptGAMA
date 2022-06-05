var achar = false;
//var tabuada = 7;
//var repeticoes = 10;

//while (repeticoes <= 10) {
    //var resultado = tabuada * repeticoes;
    //console.log(resultado);
//}


var numeroSorteado = 10;
var possivelValor = 0;

while (!achar) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achar = true;
    } else{

        console.log('Possivel valor nao corresponde ao numero sorteado ' + possivelValor);
    }

    }


