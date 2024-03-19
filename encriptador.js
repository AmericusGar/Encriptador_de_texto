const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje");


const codificacion =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptar(fraseEncriptada){
    for (let i = 0; i < codificacion.length; i++){
        if(fraseEncriptada.includes(codificacion[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                codificacion[i][0],
                codificacion[i][1]
               
            );
        }
       
    }
    return fraseEncriptada; 
}

function Desencriptar(fraseDesencriptada) {
    for (let i = 0; i < codificacion.length; i++) {
        if (fraseDesencriptada.includes(codificacion[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                codificacion[i][1],
                codificacion[i][0]
            );
            }

}
    return fraseDesencriptada; 
}

function btnEncriptar(){
    const texto = encriptar(convertirMinusculas (campoTexto.value));
    campoMensaje.value = texto;
    ocultarFondo();
}
document.getElementById('btn-encriptar').addEventListener('click', btnEncriptar);

/*funcion que maneja el evento de desencriptar desde el textarea texto-encriptado*/
function btnDesencriptar(){
    const texto = Desencriptar(convertirMinusculas (campoTexto.value));
    campoMensaje.value = texto;
}
document.getElementById('btn-desencriptar').addEventListener('click', btnDesencriptar);


function convertirMinusculas(texto) {
    let textoConvertido = "";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i);
        if (caracter >= 'A' && caracter <= 'Z') {
            // Si el carácter es una letra mayúscula, lo convertimos a minúscula
            caracter = caracter.toLowerCase();
        }
        textoConvertido += caracter;
    }
    return textoConvertido;
}
function BlockChars(event) {
    // Obtener el carácter ingresado
    var cadena = String.fromCharCode(event.which || event.keyCode);

    // Expresión regular para verificar si el carácter ingresado es alfanumérico
    var alphanumericosRegex = /^[a-z0-9\s]*$/;

    // Verificar si el carácter no es alfanumérico
    if (!alphanumericosRegex.test(cadena)) {
        event.preventDefault(); // Prevenir la acción predeterminada (bloquear la entrada del carácter)
    }
}



function copiarTexto(texto){
    if(typeof texto != 'string'){
        throw TypeError('El argumento debe ser cadena de caracteres');
    }
    let areaTexto = document.createElement('textarea');
    areaTexto.value = texto;
    areaTexto.style.position = 'absolute';

    document.body.appendChild(areaTexto);

    let seleccionado = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0): false;


    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);
  

    if(seleccionado){
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(seleccionado);
    }
}

window.onload = function(){
    document.getElementById('copiar').addEventListener('click', () =>{
        let contenido = document.getElementById('campo-mensaje').value;

        copiarTexto(contenido);
    })
}
function ocultarFondo() {
    var campoMensaje = document.getElementById('campo-mensaje');
    if (campoMensaje.value.trim() !== '') { // Si el textarea no está vacío
        campoMensaje.style.background = 'white'; // Cambia el fondo a blanco
        campoMensaje.style.backgroundImage = 'none'; // Elimina la imagen de fondo
    } else {
        campoMensaje.style.background = 'url("Muñeco.png")'; // Restaura la imagen de fondo
    }
}


