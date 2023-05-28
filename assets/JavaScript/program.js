var toast = document.getElementById('_toast')

var btn_close = document.getElementById('btn-close')
btn_close.addEventListener('click', ClicarClose)

var btn_nao = document.getElementById('btn-nao')
btn_nao = addEventListener('click', ClicarNao)

function ClicarClose(){
    toast.style.display = 'none'
};



var links = document.getElementsByTagName('a');
    for (var i=0, len=links.length; i < len; i ++) {
        links[i].target = '_blank';
    }
