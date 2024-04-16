function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente ')
    } else {
        var fsex = document.getElementsByName('radsex') //radsex é o ID do input do HTML
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex [0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','menino jovem.jpg')
            } else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src','adolescente jovem.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src','adulto h.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idoso h.jpg')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','menina jovem.jpg')
            } else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src','menina2 jovem.jpeg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src','adulta f.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idosa f.jpg')
            }                

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
       

    }
}