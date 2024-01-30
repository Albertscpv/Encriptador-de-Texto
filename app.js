/*Animacion de escritura */
const filterContainer = document.querySelector(".titulo");
const galleryItems = document.querySelectorAll(".title");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active")
        const filterValue = event.target.getAttribute("data-filter")
        galleryItems.forEach(item => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide")
                item.classList.add("show")
            } else {
                item.classList.remove("show")
                item.classList.add("hide")
            }
        })
    }
})

function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
}
const typed = new Typed ('.typed', {
strings: [
    '<i class="especialidad">Transformador de texto</i>',
    '<i class="especialidad">by</i>',
    '<i class="especialidad">Albert Dev</i>'
],
stringsElement: 'titu',
typeSpeed: 100, // Velocidad en nlisegundos para poner una Letra,
startDelay: 280, // Tiempo de retroso en iniciar lo onimocion. Aplica tombien cuando termino y vuelve o iniciar,
backSpeed: 55, // Velocidad en milisegundos pora borrar una Letro,
smartBackspace: true, // Eliminor solamente los palabras que sean nuevas en uno cadeno de texto
shuffle: false, // Alteror el orden en el que escribe los palabras.
backDelay: 1000, // Tiempo de espero despues de que termina de escribir una palabra.
loop:true, // Repetir el orroy de strings
loopCount:false, // Cantidad de veces a repetir el arroy. false = nfintte
showCursor:true, // Mostro cursor polpitanto
cursorChar:';', // Garocter paro el cursor
contentType: 'html',

})

/* Transformacion del texto*/
function encriptarTexto(){
    let entrada = document.getElementById('TextArea').value;
    let cifrado = "";
    for (let c = 0; c < entrada.length ; c++){ 
        if  (entrada[c] == 'e' ) cifrado += 'enter';
            else if  (entrada[c] == 'i') cifrado += 'imes';
            else if  (entrada[c] == 'a') cifrado += 'ai';
            else if  (entrada[c] == 'o') cifrado += 'ober';
            else if  (entrada[c] == 'u') cifrado += 'ufat';
        else  cifrado+= entrada[c];
    }
    document.getElementById('mes').value = cifrado;
}
function  desencriptarTexto() {
    let salida = document.getElementById("TextArea").value;
    let descifrado = "";
    for (let c = 0 ; c < salida.length; c++){
        if (salida[c] == 'e') {descifrado += salida[c];c+=4;}
            else if (salida[c] == 'o'  || salida[c]=='u' || salida[c] == 'i' ){descifrado  += salida[c];c+=3;}
            else if(salida[c]=='a'){descifrado += salida[c++];}     
        else  descifrado+=salida[c];
    }
    document.getElementById('mes').value = descifrado;
}
function copyText(){
    let temp =  document.getElementById('mes'); 
    if (temp.value == '')  return temp.setAttribute('placeholder', 'Ingrese un texto',);
    else
    navigator.clipboard.writeText(temp.value);
    temp.value = "";
    temp.setAttribute('placeholder', 'Texto copiado',)
}




