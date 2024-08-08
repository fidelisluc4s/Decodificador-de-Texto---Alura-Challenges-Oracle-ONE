  

function criptografarFrase(){
    let campo = document.querySelector('#text__area');    
    let msgCriptografada = document.querySelector('.contener__msg__criptografada');
    
    let textoParaCriptografar = campo.value;
    msgCriptografada.innerHTML = textoParaCriptografar;    
}

