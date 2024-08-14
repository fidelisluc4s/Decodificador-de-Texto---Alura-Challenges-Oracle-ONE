let campo = document.querySelector('#text__area');
let texto = document.querySelector('.contener');
let msgCriptografada = '';
let textoCopiado = false;

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
    campo.value = '';

    if (textoCopiado) {
        textoCopiado = false;
        setTimeout(() => {
            texto.innerHTML = `<div class="contener">
                                    <div class="contener__msg__criptografada">
                                        <img src="/assets/procurando.png" alt="procurando msg">
                                            <div class="contener__msg__informativa">
                                                <h1>Nenhuma mensagem encontrada</h1>
                                                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
                                            </div>
                                    </div>
                                </div>`;
        }, 2000);

    } else {
        setTimeout(() => {
            texto.innerHTML = `<div class="contener">
                            <div class="conteiner__hidden"> 
                                <p class="texto__conteiner">${textoCriptografado}</p>
                                <button class="button__copiar" onclick="copiarTexto()">Copiar</button>
                            </div>                        
                        </div>`;
        }, 200);
    }
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
        } else {
            textoDescriptografar += caractere;
            i++;
        }
    }
    campo.value = '';
    if (textoCopiado) {
        textoCopiado = false;
        texto.innerHTML = `<div class="contener">
                            <div class="contener__msg__criptografada">
                                <img src="/assets/procurando.png" alt="procurando msg">
                                <div class="contener__msg__informativa">
                                    <h1>Nenhuma mensagem encontrada</h1>
                                    <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
                                </div>
                            </div>
                        </div>`;
    } else {
        texto.innerHTML = `<div class="contener">
                            <div class="conteiner__hidden">
                                <p class="texto__conteiner">${textoDescriptografar}</p>
                                <button class="button__copiar" onclick="copiarTexto()">Copiar</button>
                            </div>                        
                        </div>`;
    }


}

function copiarTexto() {
    let textoParaCopiar = document.querySelector('.texto__conteiner').innerText;

    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            mostrarMensagemDeSucesso();
            textoCopiado = true;
            criptografarTexto();
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });

}

function mostrarMensagemDeSucesso() {
    let textoParaCopiar = document.querySelector('.texto__conteiner');
    let mensagem = document.createElement('div');

    mensagem.innerText = 'Texto copiado!';
    mensagem.classList.add('mensagem__sucesso');

    textoParaCopiar.parentElement.style.position = 'relative';
    textoParaCopiar.parentElement.appendChild(mensagem);

    setTimeout(() => {
        mensagem.remove();
    }, 2000);
}