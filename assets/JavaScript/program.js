/* Popap */
var toast = document.getElementById('_toast')

var btn_close = document.getElementById('btn-close')
btn_close.addEventListener('click', ClicarClose)

function ClicarClose(){
    toast.style.display = 'none'
}



/* Imgs contato */
/* Imgs contato / Telefone */
function mouseEmCimaTelefone(imagem) {
    imagem.src='assets/img/whatsapp_1.png'
}
    
 function mouseForaTelefone(imagem) {
    imagem.src='assets/img/whatsapp.png'
}


/* Imgs contato / Email */
function mouseEmCimaEmail(imagem) {
    imagem.src='assets/img/email_1.png'
}
    
 function mouseForaEmail(imagem) {
    imagem.src='assets/img/email.png'
}


/* Imgs contato / Linkedin */
function mouseEmCimaLinkedin(imagem) {
    imagem.src='assets/img/linkedin_1.png'
}
    
 function mouseForaLinkedin(imagem) {
    imagem.src='assets/img/linkedin.png'
}


/* Imgs contato / Instagram */
function mouseEmCimaInstagram(imagem) {
    imagem.src='assets/img/instagram_1.png'
}
    
 function mouseForaInstagram(imagem) {
    imagem.src='assets/img/instagram.png'
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))




/* Linha do tempo */ 
/* Linha do tempo / Mensagem 1 */ 
let mensagem1 = document.querySelector('.mensagem1')
function showMessage1(){
    mensagem1.style.display = 'block';
}

function hideMessage1(){
    mensagem1.style.display = "none";
}

/* Linha do tempo / Mensagem 2 */
let mensagem2 = document.querySelector('.mensagem2')
function showMessage2(){
    mensagem2.style.display = 'block';
}

function hideMessage2(){
    mensagem2.style.display = "none";
}

/* Linha do tempo / Mensagem 3 */
let mensagem3 = document.querySelector('.mensagem3')
function showMessage3(){
    mensagem3.style.display = 'block';
}

function hideMessage3(){
    mensagem3.style.display = "none";
}

/* Linha do tempo / Mensagem 4 */
let mensagem4 = document.querySelector('.mensagem4')
function showMessage4(){
    mensagem4.style.display = 'block';
}

function hideMessage4(){
    mensagem4.style.display = "none";
}

/* Linha do tempo / Mensagem 5 */
let mensagem5 = document.querySelector('.mensagem5')
function showMessage5(){
    mensagem5.style.display = 'block';
}

function hideMessage5(){
    mensagem5.style.display = "none";
}

/* Linha do tempo / Mensagem 6 */
let mensagem6 = document.querySelector('.mensagem6')
function showMessage6(){
    mensagem6.style.display = 'block';
}

function hideMessage6(){
    mensagem6.style.display = "none";
}

/* Linha do tempo / Mensagem 7 */
let mensagem7 = document.querySelector('.mensagem7')
function showMessage7(){
    mensagem7.style.display = 'block';
}

function hideMessage7(){
    mensagem7.style.display = "none";
}
