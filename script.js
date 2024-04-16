alert('TE AMO AMOR ')
function carregar() {

    var msg = window.document.getElementById('msg') //na DIV esta esse msg
    var img = window.document.getElementById('imagem') // mesma coisa acima 
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    // forcando a hora var hora = 8
    msg.innerHTML = `Agora sao ${hora}:${minutos } e ${segundos} segundos.`
   

    if (hora >= 0 && hora < 12 ){
        // BOM DIA 
        img.src = 'manha.webp'
        
    }
    else if (hora >= 12 && hora <= 18){
       
        img.src = 'tarde.webp'
    }

    else {
        //BOA NOITE 
        img.src = 'noite.webp'
    }
}