console.log('Javascript carregado');

function validarCPF(cpf) {
    //return false;
    //console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        //console.log(numeros);
        //console.log('numeros o cpf' + numeros);
        //console.log('digitos do cpf' + digitos);
        
        var soma = 0;
        
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        //console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
//Validacao do primeiro digito
        if (resultado != digitos.charAt(0)) {
           return false;
       }
       //console.log(digitos.toString().charAt(0) + 'é a primeira posicao da variavel soma');
        
        soma = 0;
    
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        //console.log(soma);
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        //validaçao do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
}
        return true;
    }
}


function validar() {
    
    console.log('iniciacao validar cpf');

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidar = validarCPF(cpf);

    if (resultadoValidar) {

        document.getElementById('success').style.display = 'block';

    } else {
        document.getElementById('error').style.display = 'block';

    }



}
