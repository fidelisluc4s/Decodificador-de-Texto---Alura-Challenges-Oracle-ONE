let campo = document.querySelector('#text__area');
let texto = document.querySelector('.contener__msg__criptografada');
let msgCriptografada = '';

function criptografarTexto() {
    let textoParaCriptografar = campo.value;
    let textoCriptografado = '';

    for (let i = 0; i < textoParaCriptografar.length; i++) {
        let caractere = textoParaCriptografar[i];
        if (caractere === 'a') {
            textoCriptografado += 'ai';
        } else if (caractere === 'e') {
            textoCriptografado += 'enter';
        } else if (caractere === 'i') {
            textoCriptografado += 'imes';
        } else if (caractere === 'o') {
            textoCriptografado += 'ober';
        } else if (caractere === 'u') {
            textoCriptografado += 'ufat';
        } else {
            textoCriptografado += caractere;
        }
    }
    return texto.innerHTML = textoCriptografado;
}

function descriptografarTexto() {
    let textoParaDescriptografar = campo.value;
    let textoDescriptografar = '';
    let i = 0;
    
    while (i < textoParaDescriptografar.length) {
        let caractere = textoParaDescriptografar[i];

        if (textoParaDescriptografar.substr(i, 2) === 'ai') {
            textoDescriptografar += 'a';
            i += 2;
        } else if (textoParaDescriptografar.substr(i, 5) === 'enter') {
            textoDescriptografar += 'e';
            i += 5;
        }
        else if (textoParaDescriptografar.substr(i, 4) === 'imes') {
            textoDescriptografar += 'i';
            i += 4;
        }
        else if (textoParaDescriptografar.substr(i, 4) === 'ober') {
            textoDescriptografar += 'o';
            i += 4;
        } else if (textoParaDescriptografar.substr(i, 4) === 'ufat') {
            textoDescriptografar += 'u';
            i += 4;
        }else {
            textoDescriptografar += caractere;
            i++;
        }
    }
    return texto.innerHTML = textoDescriptografar;

}