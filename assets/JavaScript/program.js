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
    imagem.src='assets/img/telefone1.png'
}
    
 function mouseForaTelefone(imagem) {
    imagem.src='assets/img/telefone.png'
}


/* Imgs contato / Email */
function mouseEmCimaEmail(imagem) {
    imagem.src='assets/img/gmail.png'
}
    
 function mouseForaEmail(imagem) {
    imagem.src='assets/img/email.png'
}


/* Imgs contato / Linkedin */
function mouseEmCimaLinkedin(imagem) {
    imagem.src='assets/img/linkedin1.png'
}
    
 function mouseForaLinkedin(imagem) {
    imagem.src='assets/img/linkedin.png'
}


/* Imgs contato / Instagram */
function mouseEmCimaInstagram(imagem) {
    imagem.src='assets/img/instagram1.png'
}
    
 function mouseForaInstagram(imagem) {
    imagem.src='assets/img/instagram.png'
}

