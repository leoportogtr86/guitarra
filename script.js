let calendario = document.getElementById('calendario')
let abrCorda = document.getElementById('abrCorda')
let speed = document.getElementById('speed')
let traste1 = document.getElementById('traste1')
let traste2 = document.getElementById('traste2')
let traste3 = document.getElementById('traste3')
let traste4 = document.getElementById('traste4')
let traste5 = document.getElementById('traste5')
let traste6 = document.getElementById('traste6')
let traste7 = document.getElementById('traste7')
let traste8 = document.getElementById('traste8')
let traste9 = document.getElementById('traste9')
let traste10 = document.getElementById('traste10')
let traste11 = document.getElementById('traste11')
let traste12 = document.getElementById('traste12')
let traste13 = document.getElementById('traste13')
let traste14 = document.getElementById('traste14')
let traste15 = document.getElementById('traste15')
let menuH = document.getElementById('menuH')
let menuH1 = document.getElementById('menuH1')
let estrutura = document.getElementById('estrutura')
let tipo = document.getElementById('tipo')
let tonalidade = document.getElementById('tonalidade')
let botao0 = document.getElementById('botao0')
let posicao = document.getElementById('posicao')
let video = document.getElementById('video')
let inputVideo = document.getElementById('inputVideo')
let botao1 = document.getElementById('botao1')
let clear = document.getElementById('limpar')
let mostrar = document.getElementById('mostrar')
let botao = document.getElementById('botao')
let pestana = document.getElementById('pestana')
let pdf = document.getElementById('pdf')
let lista = document.getElementById('lista')
let corda = document.getElementsByClassName('corda')
let traste = document.getElementsByClassName('traste')
let nota = document.getElementsByClassName('nota')
let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')
let ex5 = document.getElementById('ex5')
let posicao1 = document.getElementById('posicao1')
let posicao2 = document.getElementById('posicao2')
let posicao3 = document.getElementById('posicao3')
let posicao4 = document.getElementById('posicao4')
let posicao5 = document.getElementById('posicao5')
let all = document.getElementsByTagName('*')
let bolinha = document.getElementsByClassName('bolinha')
let body = document.body
let timerSvg = document.getElementById('timerSvg')
let aviso = document.getElementById('aviso')
let timer = document.getElementById('timer')
let esquerda = document.getElementById('esquerda')
let direita = document.getElementById('direita')
let contadorPosicao = 1
let base = document.getElementById('base')
let click = document.getElementById('click')
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let mais = document.getElementById('mais')
let menos = document.getElementById('menos')
let andamento = document.getElementById('andamento')
let bpm = 60
let camada1 = document.getElementById('camada1')
let tocando = false
let speedOn = false
let listaSemanas = document.getElementById('listaSemanas')
let semana1 = document.getElementById('semana1')
let css = document.getElementById('css')
let video1 = document.getElementById('video1')

video1.play()

semana1.onclick = function () {

    listaSemanas.style.top = '-580px'
    
    
}

calendario.onclick = function () {
    
    listaSemanas.style.top = '10px'
}

listaSemanas.onmouseleave = function () {

    listaSemanas.style.top = '-580px'
    
}

speed.onclick = function () {

    if (speedOn == false) {

        speedOn = true
        speed.src = 'speedOn.svg'
        funcaoVelocidade()


    } else {

        speedOn = false
        speed.src = 'speed.svg'
        window.location.reload()

    }

}

andamento.innerHTML = bpm + ' BPM'

click.src = bpm + ' BPM.mp3'

function verificaBpm() {

    if (bpm <= 55) {

        if (tocando == true) {

            bpm = 60
            andamento.innerHTML = '60 BPM'
            click.src = '60 BPM.mp3'
            click.play()


        } else if (tocando == false) {

            bpm = 60
            andamento.innerHTML = '60 BPM'
            click.src = '60 BPM.mp3'


        }



    }

    if (bpm >= 285) {

        if (tocando == true) {

            bpm = 280
            andamento.innerHTML = '280 BPM'
            click.src = '280 BPM.mp3'
            click.play()


        } else if (tocando == false) {

            bpm = 280
            andamento.innerHTML = '280 BPM'
            click.src = '280 BPM.mp3'


        }

    }

}



play.onclick = function () {

    click.play()
    play.style.display = 'none'
    pause.style.display = 'block'
    click.currentTime = 0
    camada1.style.animation = 'pisca2 1s linear infinite'
    tocando = true

    if (bpm == 120) {

        camada1.style.animation = 'pisca2 0.5s linear infinite'


    } else if (bpm == 240) {

        camada1.style.animation = 'pisca2 0.25s linear infinite'


    } else if (bpm == 65) {

        camada1.style.animation = 'pisca2 0.92s linear infinite'


    } else if (bpm == 70) {

        camada1.style.animation = 'pisca2 0.85s linear infinite'


    } else if (bpm == 75) {

        camada1.style.animation = 'pisca2 0.8s linear infinite'


    } else if (bpm == 80) {

        camada1.style.animation = 'pisca2 0.75s linear infinite'


    } else if (bpm == 85) {

        camada1.style.animation = 'pisca2 0.70s linear infinite'


    } else if (bpm == 90) {

        camada1.style.animation = 'pisca2 0.66s linear infinite'


    } else if (bpm == 95) {

        camada1.style.animation = 'pisca2 0.63s linear infinite'


    } else if (bpm == 100) {

        camada1.style.animation = 'pisca2 0.6s linear infinite'


    } else if (bpm == 105) {

        camada1.style.animation = 'pisca2 0.57s linear infinite'


    } else if (bpm == 110) {

        camada1.style.animation = 'pisca2 0.54s linear infinite'


    } else if (bpm == 115) {

        camada1.style.animation = 'pisca2 0.52s linear infinite'


    } else if (bpm == 120) {

        camada1.style.animation = 'pisca2 0.5s linear infinite'


    } else if (bpm == 125) {

        camada1.style.animation = 'pisca2 0.48s linear infinite'


    } else if (bpm == 130) {

        camada1.style.animation = 'pisca2 0.46s linear infinite'


    } else if (bpm == 135) {

        camada1.style.animation = 'pisca2 0.44s linear infinite'


    } else if (bpm == 140) {

        camada1.style.animation = 'pisca2 0.42s linear infinite'


    } else if (bpm == 145) {

        camada1.style.animation = 'pisca2 0.41s linear infinite'


    } else if (bpm == 150) {

        camada1.style.animation = 'pisca2 0.4s linear infinite'


    } else if (bpm == 155) {

        camada1.style.animation = 'pisca2 0.38s linear infinite'


    } else if (bpm == 160) {

        camada1.style.animation = 'pisca2 0.375s linear infinite'


    } else if (bpm == 165) {

        camada1.style.animation = 'pisca2 0.36s linear infinite'


    } else if (bpm == 170) {

        camada1.style.animation = 'pisca2 0.35s linear infinite'


    } else if (bpm == 175) {

        camada1.style.animation = 'pisca2 0.34s linear infinite'


    } else if (bpm == 180) {

        camada1.style.animation = 'pisca2 0.33s linear infinite'


    } else if (bpm == 185) {

        camada1.style.animation = 'pisca2 0.32s linear infinite'


    } else if (bpm == 190) {

        camada1.style.animation = 'pisca2 0.31s linear infinite'


    } else if (bpm == 195) {

        camada1.style.animation = 'pisca2 0.307s linear infinite'


    } else if (bpm == 200) {

        camada1.style.animation = 'pisca2 0.3s linear infinite'


    } else if (bpm == 205) {

        camada1.style.animation = 'pisca2 0.292s linear infinite'


    } else if (bpm == 210) {

        camada1.style.animation = 'pisca2 0.285s linear infinite'


    } else if (bpm == 215) {

        camada1.style.animation = 'pisca2 0.279s linear infinite'


    } else if (bpm == 220) {

        camada1.style.animation = 'pisca2 0.272s linear infinite'


    } else if (bpm == 225) {

        camada1.style.animation = 'pisca2 0.266s linear infinite'


    } else if (bpm == 230) {

        camada1.style.animation = 'pisca2 0.260s linear infinite'


    } else if (bpm == 235) {

        camada1.style.animation = 'pisca2 0.255s linear infinite'


    } else if (bpm == 240) {

        camada1.style.animation = 'pisca2 0.25s linear infinite'


    }










    for (i = 60; i <= 240; i++) {

        if (i % 5 == 0) {

            console.log(60 / i)


        }


    }



}



pause.onclick = function () {

    click.pause()
    click.currentTime = 0
    play.style.display = 'block'
    pause.style.display = 'none'
    camada1.style.animation = ''
    tocando = false
    clearInterval(treinarVelocidade)





}

mais.onclick = function () {

    if (tocando == true) {

        bpm += 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        click.play()
        verificaBpm()
        if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        } else if (bpm == 65) {

            camada1.style.animation = 'pisca2 0.92s linear infinite'


        } else if (bpm == 70) {

            camada1.style.animation = 'pisca2 0.85s linear infinite'


        } else if (bpm == 75) {

            camada1.style.animation = 'pisca2 0.8s linear infinite'


        } else if (bpm == 80) {

            camada1.style.animation = 'pisca2 0.75s linear infinite'


        } else if (bpm == 85) {

            camada1.style.animation = 'pisca2 0.70s linear infinite'


        } else if (bpm == 90) {

            camada1.style.animation = 'pisca2 0.66s linear infinite'


        } else if (bpm == 95) {

            camada1.style.animation = 'pisca2 0.63s linear infinite'


        } else if (bpm == 100) {

            camada1.style.animation = 'pisca2 0.6s linear infinite'


        } else if (bpm == 105) {

            camada1.style.animation = 'pisca2 0.57s linear infinite'


        } else if (bpm == 110) {

            camada1.style.animation = 'pisca2 0.54s linear infinite'


        } else if (bpm == 115) {

            camada1.style.animation = 'pisca2 0.52s linear infinite'


        } else if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 125) {

            camada1.style.animation = 'pisca2 0.48s linear infinite'


        } else if (bpm == 130) {

            camada1.style.animation = 'pisca2 0.46s linear infinite'


        } else if (bpm == 135) {

            camada1.style.animation = 'pisca2 0.44s linear infinite'


        } else if (bpm == 140) {

            camada1.style.animation = 'pisca2 0.42s linear infinite'


        } else if (bpm == 145) {

            camada1.style.animation = 'pisca2 0.41s linear infinite'


        } else if (bpm == 150) {

            camada1.style.animation = 'pisca2 0.4s linear infinite'


        } else if (bpm == 155) {

            camada1.style.animation = 'pisca2 0.38s linear infinite'


        } else if (bpm == 160) {

            camada1.style.animation = 'pisca2 0.375s linear infinite'


        } else if (bpm == 165) {

            camada1.style.animation = 'pisca2 0.36s linear infinite'


        } else if (bpm == 170) {

            camada1.style.animation = 'pisca2 0.35s linear infinite'


        } else if (bpm == 175) {

            camada1.style.animation = 'pisca2 0.34s linear infinite'


        } else if (bpm == 180) {

            camada1.style.animation = 'pisca2 0.33s linear infinite'


        } else if (bpm == 185) {

            camada1.style.animation = 'pisca2 0.32s linear infinite'


        } else if (bpm == 190) {

            camada1.style.animation = 'pisca2 0.31s linear infinite'


        } else if (bpm == 195) {

            camada1.style.animation = 'pisca2 0.307s linear infinite'


        } else if (bpm == 200) {

            camada1.style.animation = 'pisca2 0.3s linear infinite'


        } else if (bpm == 205) {

            camada1.style.animation = 'pisca2 0.292s linear infinite'


        } else if (bpm == 210) {

            camada1.style.animation = 'pisca2 0.285s linear infinite'


        } else if (bpm == 215) {

            camada1.style.animation = 'pisca2 0.279s linear infinite'


        } else if (bpm == 220) {

            camada1.style.animation = 'pisca2 0.272s linear infinite'


        } else if (bpm == 225) {

            camada1.style.animation = 'pisca2 0.266s linear infinite'


        } else if (bpm == 230) {

            camada1.style.animation = 'pisca2 0.260s linear infinite'


        } else if (bpm == 235) {

            camada1.style.animation = 'pisca2 0.255s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        }

    } else if (tocando == false) {

        bpm += 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        verificaBpm()
        camada1.style.animation = ''


    }





}

menos.onclick = function () {



    if (tocando == true) {

        bpm -= 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        click.play()
        verificaBpm()
        if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        } else if (bpm == 65) {

            camada1.style.animation = 'pisca2 0.92s linear infinite'


        } else if (bpm == 70) {

            camada1.style.animation = 'pisca2 0.85s linear infinite'


        } else if (bpm == 75) {

            camada1.style.animation = 'pisca2 0.8s linear infinite'


        } else if (bpm == 80) {

            camada1.style.animation = 'pisca2 0.75s linear infinite'


        } else if (bpm == 85) {

            camada1.style.animation = 'pisca2 0.70s linear infinite'


        } else if (bpm == 90) {

            camada1.style.animation = 'pisca2 0.66s linear infinite'


        } else if (bpm == 95) {

            camada1.style.animation = 'pisca2 0.63s linear infinite'


        } else if (bpm == 100) {

            camada1.style.animation = 'pisca2 0.6s linear infinite'


        } else if (bpm == 105) {

            camada1.style.animation = 'pisca2 0.57s linear infinite'


        } else if (bpm == 110) {

            camada1.style.animation = 'pisca2 0.54s linear infinite'


        } else if (bpm == 115) {

            camada1.style.animation = 'pisca2 0.52s linear infinite'


        } else if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 125) {

            camada1.style.animation = 'pisca2 0.48s linear infinite'


        } else if (bpm == 130) {

            camada1.style.animation = 'pisca2 0.46s linear infinite'


        } else if (bpm == 135) {

            camada1.style.animation = 'pisca2 0.44s linear infinite'


        } else if (bpm == 140) {

            camada1.style.animation = 'pisca2 0.42s linear infinite'


        } else if (bpm == 145) {

            camada1.style.animation = 'pisca2 0.41s linear infinite'


        } else if (bpm == 150) {

            camada1.style.animation = 'pisca2 0.4s linear infinite'


        } else if (bpm == 155) {

            camada1.style.animation = 'pisca2 0.38s linear infinite'


        } else if (bpm == 160) {

            camada1.style.animation = 'pisca2 0.375s linear infinite'


        } else if (bpm == 165) {

            camada1.style.animation = 'pisca2 0.36s linear infinite'


        } else if (bpm == 170) {

            camada1.style.animation = 'pisca2 0.35s linear infinite'


        } else if (bpm == 175) {

            camada1.style.animation = 'pisca2 0.34s linear infinite'


        } else if (bpm == 180) {

            camada1.style.animation = 'pisca2 0.33s linear infinite'


        } else if (bpm == 185) {

            camada1.style.animation = 'pisca2 0.32s linear infinite'


        } else if (bpm == 190) {

            camada1.style.animation = 'pisca2 0.31s linear infinite'


        } else if (bpm == 195) {

            camada1.style.animation = 'pisca2 0.307s linear infinite'


        } else if (bpm == 200) {

            camada1.style.animation = 'pisca2 0.3s linear infinite'


        } else if (bpm == 205) {

            camada1.style.animation = 'pisca2 0.292s linear infinite'


        } else if (bpm == 210) {

            camada1.style.animation = 'pisca2 0.285s linear infinite'


        } else if (bpm == 215) {

            camada1.style.animation = 'pisca2 0.279s linear infinite'


        } else if (bpm == 220) {

            camada1.style.animation = 'pisca2 0.272s linear infinite'


        } else if (bpm == 225) {

            camada1.style.animation = 'pisca2 0.266s linear infinite'


        } else if (bpm == 230) {

            camada1.style.animation = 'pisca2 0.260s linear infinite'


        } else if (bpm == 235) {

            camada1.style.animation = 'pisca2 0.255s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        }

    } else if (tocando == false) {

        bpm -= 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        verificaBpm()
        camada1.style.animation = ''


    }

}


ex5.onclick = function () {

    console.log('ex5')
    lista.style.top = '-580px'
    base.style.display = 'block'
    base.play()

    setInterval(function () {

        if (base.currentTime < 39) {

            console.log('shape 1')

            apagar()
            corda6[3].style.display = 'block'
            corda6[5].style.display = 'block'
            corda6[7].style.display = 'block'
            corda5[3].style.display = 'block'
            corda5[5].style.display = 'block'
            corda5[7].style.display = 'block'
            corda4[4].style.display = 'block'
            corda4[5].style.display = 'block'
            corda4[7].style.display = 'block'
            corda3[4].style.display = 'block'
            corda3[5].style.display = 'block'
            corda3[7].style.display = 'block'
            corda2[5].style.display = 'block'
            corda2[7].style.display = 'block'
            corda2[8].style.display = 'block'
            corda1[5].style.display = 'block'
            corda1[7].style.display = 'block'
            corda1[8].style.display = 'block'


        } else if (base.currentTime < 78) {

            console.log('shape 2')

            apagar()
            corda6[5].style.display = 'block'
            corda6[7].style.display = 'block'
            corda6[8].style.display = 'block'
            corda5[5].style.display = 'block'
            corda5[7].style.display = 'block'
            corda5[9].style.display = 'block'
            corda4[5].style.display = 'block'
            corda4[7].style.display = 'block'
            corda4[9].style.display = 'block'
            corda3[5].style.display = 'block'
            corda3[7].style.display = 'block'
            corda3[9].style.display = 'block'
            corda2[7].style.display = 'block'
            corda2[8].style.display = 'block'
            corda2[10].style.display = 'block'
            corda1[7].style.display = 'block'
            corda1[8].style.display = 'block'
            corda1[10].style.display = 'block'


        } else if (base.currentTime < 117) {

            console.log('shape 3')

            apagar()
            corda6[7].style.display = 'block'
            corda6[8].style.display = 'block'
            corda6[10].style.display = 'block'
            corda5[7].style.display = 'block'
            corda5[9].style.display = 'block'
            corda5[10].style.display = 'block'
            corda4[7].style.display = 'block'
            corda4[9].style.display = 'block'
            corda4[10].style.display = 'block'
            corda3[7].style.display = 'block'
            corda3[9].style.display = 'block'
            corda3[11].style.display = 'block'
            corda2[8].style.display = 'block'
            corda2[10].style.display = 'block'
            corda2[12].style.display = 'block'
            corda1[8].style.display = 'block'
            corda1[10].style.display = 'block'
            corda1[12].style.display = 'block'


        } else if (base.currentTime < 156) {

            console.log('shape 4')

            apagar()
            corda6[8].style.display = 'block'
            corda6[10].style.display = 'block'
            corda6[12].style.display = 'block'
            corda5[9].style.display = 'block'
            corda5[10].style.display = 'block'
            corda5[12].style.display = 'block'
            corda4[9].style.display = 'block'
            corda4[10].style.display = 'block'
            corda4[12].style.display = 'block'
            corda3[9].style.display = 'block'
            corda3[11].style.display = 'block'
            corda3[12].style.display = 'block'
            corda2[10].style.display = 'block'
            corda2[12].style.display = 'block'
            corda2[13].style.display = 'block'
            corda1[10].style.display = 'block'
            corda1[12].style.display = 'block'
            corda1[14].style.display = 'block'


        } else if (base.currentTime < 195) {

            console.log('shape 5')

            apagar()
            corda6[10].style.display = 'block'
            corda6[12].style.display = 'block'
            corda6[14].style.display = 'block'
            corda5[10].style.display = 'block'
            corda5[12].style.display = 'block'
            corda5[14].style.display = 'block'
            corda4[10].style.display = 'block'
            corda4[12].style.display = 'block'
            corda4[14].style.display = 'block'
            corda3[11].style.display = 'block'
            corda3[12].style.display = 'block'
            corda3[14].style.display = 'block'
            corda2[12].style.display = 'block'
            corda2[13].style.display = 'block'
            corda2[15].style.display = 'block'
            corda1[12].style.display = 'block'
            corda1[14].style.display = 'block'
            corda1[15].style.display = 'block'


        } else if (base.currentTime < 234) {

            console.log('shape 6')

            apagar()
            corda6[0].style.display = 'block'
            corda6[2].style.display = 'block'
            corda6[3].style.display = 'block'
            corda5[0].style.display = 'block'
            corda5[2].style.display = 'block'
            corda5[3].style.display = 'block'
            corda4[0].style.display = 'block'
            corda4[2].style.display = 'block'
            corda4[4].style.display = 'block'
            corda3[0].style.display = 'block'
            corda3[2].style.display = 'block'
            corda3[4].style.display = 'block'
            corda2[1].style.display = 'block'
            corda2[3].style.display = 'block'
            corda2[5].style.display = 'block'
            corda1[2].style.display = 'block'
            corda1[3].style.display = 'block'
            corda1[5].style.display = 'block'


        } else if (base.currentTime < 273) {

            console.log('shape 7')

            apagar()
            corda6[2].style.display = 'block'
            corda6[3].style.display = 'block'
            corda6[5].style.display = 'block'
            corda5[2].style.display = 'block'
            corda5[3].style.display = 'block'
            corda5[5].style.display = 'block'
            corda4[2].style.display = 'block'
            corda4[4].style.display = 'block'
            corda4[5].style.display = 'block'
            corda3[2].style.display = 'block'
            corda3[4].style.display = 'block'
            corda3[5].style.display = 'block'
            corda2[3].style.display = 'block'
            corda2[5].style.display = 'block'
            corda2[7].style.display = 'block'
            corda1[3].style.display = 'block'
            corda1[5].style.display = 'block'
            corda1[7].style.display = 'block'


        }


    }, 500)

}


menuH1.onclick = function () {

    lista.style.right = '10px'
    lista.style.top = '0px'

    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(5px)'


    }


    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.filter = 'blur(5px)'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(5px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(5px)'


    }



}

if (lista.style.right == '-550px') {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(0px)'


    }



}

esquerda.onclick = function () {





}

direita.onclick = function () {








}





bolinha[1].onclick = function () {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.backgroundColor = 'gray'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.backgroundColor = 'gray'


    }

    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.backgroundColor = 'gray'


    }

    body.style.backgroundColor = 'white'

}

bolinha[0].onclick = function () {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.backgroundColor = 'orangered'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.backgroundColor = 'orangered'


    }

    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.backgroundColor = 'orangered'


    }

    body.style.backgroundColor = '#1F3340'

}

timerSvg.onmouseover = function () {


    aviso.style.display = 'block'

}

timerSvg.onmouseout = function () {


    aviso.style.display = 'none'

}

timerSvg.onclick = function () {


    timer.style.animation = 'timer 600s linear'

    setTimeout(function () {

        aviso.style.display = 'block'
        aviso.innerHTML = 'Já chegamos na metade! Força, falta pouco. Não deixe as distrações te pararem!!!'
        aviso.style.animation = 'pisca 1s linear 5'

    }, 1000 * 60 * 5)

    setTimeout(function () {

        alert('Exercício finalizado!!!')

    }, 1000 * 60 * 10)

    setTimeout(function () {

        window.location.reload()

    }, 1000 * 60 * 10 + 3)

}







ex1.onclick = function () {

    lista.style.top = '-580px'

    ex1.style.backgroundColor = 'orange'
   
}

for (i = 0; i < bolinha.length; i++) {

    bolinha[i].style.backgroundColor = 'grey'


}


function molduraF(casa) {

    moldura.style.display = 'block'


    if (casa == 1) {

        moldura.style.left = '100px'


    } else if (casa == 0) {

        moldura.style.left = '20px'

    } else if (casa == 2) {

        moldura.style.left = '180px'
    } else if (casa == 3) {

        moldura.style.left = '260px'
    } else if (casa == 4) {

        moldura.style.left = '340px'
    } else if (casa == 5) {

        moldura.style.left = '420px'
    } else if (casa == 6) {

        moldura.style.left = '500px'
    } else if (casa == 7) {

        moldura.style.left = '580px'
    } else if (casa == 8) {

        moldura.style.left = '660px'
    } else if (casa == 9) {

        moldura.style.left = '740px'
    } else if (casa == 10) {

        moldura.style.left = '820px'
    } else if (casa == 11) {

        moldura.style.left = '900px'
    } else if (casa == 12) {

        moldura.style.left = '980px'
    }

}

ex1.onclick = function () {

    apagar()

    lista.style.top = '-580px'
    pdf.src = 'precisao1.pdf'
    video1.src = 'exPrecisao1.mp4'
    pdf.style.zIndex = '50'
    pdf.style.display = 'inline'
    video1.style.display = 'inline'



    for (i = 3; i < 7; i++) {

        corda6[i].style.display = 'block'
        corda6[i].style.backgroundColor = 'greeyellow'

        corda5[i].style.display = 'block'
        corda5[i].style.backgroundColor = 'greeyellow'

        corda4[i].style.display = 'block'
        corda4[i].style.backgroundColor = 'greeyellow'

        corda3[i].style.display = 'block'
        corda3[i].style.backgroundColor = 'greeyellow'

        corda2[i].style.display = 'block'
        corda2[i].style.backgroundColor = 'greeyellow'

        corda1[i].style.display = 'block'
        corda1[i].style.backgroundColor = 'greeyellow'
    }

   


}



ex2.onclick = function () {

    apagar()

    contadorPosicao = 0
    lista.style.top = '-580px'
    pdf.style.display = 'none'
    video1.style.display = 'none'
    video.style.display = 'block'



    mostrarGS()
    mostrarA()
    mostrarB()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()





}

lista.onmouseleave = function () {

    lista.style.top = '-580px'
    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(0px)'


    }



    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(0px)'


    }


    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(0px)'


    }

}

ex3.onclick = function () {

    pdf.src = '3em3.pdf'
    lista.style.top = '-580px'
    video.style.display = 'block'
    video.src = 'https://www.youtube.com/embed/OyV6Y5StgZw?list=PLKJpTqKLvfLKCmmRzBkyWvEyILKXtMkR2'
    pdf.style.display = 'none'
    video1.style.display = 'none'

    mostrarG()
    mostrarA()
    mostrarB()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarFS()
}

ex4.onclick = function () {

    pdf.src = '4em4.pdf'
    lista.style.top = '-580px'
    video.style.display = 'block'
    video.src = 'https://www.youtube.com/embed/rEUQSj7mcR8?list=PLKJpTqKLvfLKCmmRzBkyWvEyILKXtMkR2'
    pdf.style.display = 'none'
    video1.style.display = 'none'

    mostrarG()
    mostrarA()
    mostrarB()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarFS()
}


botao.style.display = 'none'
input.style.display = 'none'

//tratando o código de incorporação e retirando apenas o src

botao1.onclick = function () {

    let link = inputVideo.value

    let vetorLink = link.split(' ')

    vetorLink = vetorLink[3].replace('src="', '')

    video.src = vetorLink.slice(0, -1)


}




//****************************************************************************************/

botao0.onclick = function () {

    if (posicao.value == 1) {

        console.log('shape 1')

        apagar()
        corda6[5].style.display = 'block'
        corda6[7].style.display = 'block'
        corda6[8].style.display = 'block'
        corda5[5].style.display = 'block'
        corda5[7].style.display = 'block'
        corda5[8].style.display = 'block'
        corda4[6].style.display = 'block'
        corda4[7].style.display = 'block'
        corda4[9].style.display = 'block'
        corda3[5].style.display = 'block'
        corda3[7].style.display = 'block'
        corda3[9].style.display = 'block'
        corda2[6].style.display = 'block'
        corda2[9].style.display = 'block'
        corda2[10].style.display = 'block'
        corda1[7].style.display = 'block'
        corda1[8].style.display = 'block'
        corda1[10].style.display = 'block'


    } else if (posicao.value == 2) {

        console.log('shape 2')

        apagar()
        corda6[7].style.display = 'block'
        corda6[8].style.display = 'block'
        corda6[10].style.display = 'block'
        corda5[7].style.display = 'block'
        corda5[8].style.display = 'block'
        corda5[11].style.display = 'block'
        corda4[7].style.display = 'block'
        corda4[9].style.display = 'block'
        corda4[10].style.display = 'block'
        corda3[7].style.display = 'block'
        corda3[9].style.display = 'block'
        corda3[10].style.display = 'block'
        corda2[9].style.display = 'block'
        corda2[10].style.display = 'block'
        corda2[12].style.display = 'block'
        corda1[8].style.display = 'block'
        corda1[10].style.display = 'block'
        corda1[12].style.display = 'block'


    } else if (posicao.value == 3) {

        console.log('shape 3')

        apagar()
        corda6[8].style.display = 'block'
        corda6[10].style.display = 'block'
        corda6[12].style.display = 'block'
        corda5[8].style.display = 'block'
        corda5[11].style.display = 'block'
        corda5[12].style.display = 'block'
        corda4[9].style.display = 'block'
        corda4[10].style.display = 'block'
        corda4[12].style.display = 'block'
        corda3[9].style.display = 'block'
        corda3[10].style.display = 'block'
        corda3[13].style.display = 'block'
        corda2[10].style.display = 'block'
        corda2[12].style.display = 'block'
        corda2[13].style.display = 'block'
        corda1[10].style.display = 'block'
        corda1[12].style.display = 'block'
        corda1[13].style.display = 'block'


    } else if (posicao.value == 4) {

        console.log('shape 4')

        apagar()
        corda6[10].style.display = 'block'
        corda6[12].style.display = 'block'
        corda6[13].style.display = 'block'
        corda5[11].style.display = 'block'
        corda5[12].style.display = 'block'
        corda5[14].style.display = 'block'
        corda4[10].style.display = 'block'
        corda4[12].style.display = 'block'
        corda4[14].style.display = 'block'
        corda3[10].style.display = 'block'
        corda3[13].style.display = 'block'
        corda3[14].style.display = 'block'
        corda2[12].style.display = 'block'
        corda2[13].style.display = 'block'
        corda2[15].style.display = 'block'
        corda1[12].style.display = 'block'
        corda1[13].style.display = 'block'
        corda1[16].style.display = 'block'


    } else if (posicao.value == 5) {

        console.log('shape 5')

        apagar()
        corda6[0].style.display = 'block'
        corda6[1].style.display = 'block'
        corda6[4].style.display = 'block'
        corda5[0].style.display = 'block'
        corda5[2].style.display = 'block'
        corda5[3].style.display = 'block'
        corda4[0].style.display = 'block'
        corda4[2].style.display = 'block'
        corda4[3].style.display = 'block'
        corda3[1].style.display = 'block'
        corda3[2].style.display = 'block'
        corda3[4].style.display = 'block'
        corda2[1].style.display = 'block'
        corda2[3].style.display = 'block'
        corda2[5].style.display = 'block'
        corda1[1].style.display = 'block'
        corda1[4].style.display = 'block'
        corda1[5].style.display = 'block'


    } else if (posicao.value == 6) {

        console.log('shape 6')

        apagar()
        corda6[1].style.display = 'block'
        corda6[4].style.display = 'block'
        corda6[5].style.display = 'block'
        corda5[2].style.display = 'block'
        corda5[3].style.display = 'block'
        corda5[5].style.display = 'block'
        corda4[2].style.display = 'block'
        corda4[3].style.display = 'block'
        corda4[6].style.display = 'block'
        corda3[2].style.display = 'block'
        corda3[4].style.display = 'block'
        corda3[5].style.display = 'block'
        corda2[3].style.display = 'block'
        corda2[5].style.display = 'block'
        corda2[6].style.display = 'block'
        corda1[4].style.display = 'block'
        corda1[5].style.display = 'block'
        corda1[7].style.display = 'block'


    } else if (posicao.value == 7) {

        console.log('shape 7')

        apagar()
        corda6[4].style.display = 'block'
        corda6[5].style.display = 'block'
        corda6[7].style.display = 'block'
        corda5[3].style.display = 'block'
        corda5[5].style.display = 'block'
        corda5[7].style.display = 'block'
        corda4[3].style.display = 'block'
        corda4[6].style.display = 'block'
        corda4[7].style.display = 'block'
        corda3[4].style.display = 'block'
        corda3[5].style.display = 'block'
        corda3[7].style.display = 'block'
        corda2[5].style.display = 'block'
        corda2[6].style.display = 'block'
        corda2[8].style.display = 'block'
        corda1[5].style.display = 'block'
        corda1[7].style.display = 'block'
        corda1[8].style.display = 'block'


    } else if (posicao.value == 8) {

        apagar()

        mostrarG()
        mostrarA()
        mostrarB()
        mostrarC()
        mostrarD()
        mostrarE()
        mostrarFS()



    }



}


//******************************************************************************************************* */
let corda1_casa0 = document.getElementById('corda1_casa0')
let corda1_casa1 = document.getElementById('corda1_casa1')
let corda1_casa2 = document.getElementById('corda1_casa2')
let corda1_casa3 = document.getElementById('corda1_casa3')
let corda1_casa4 = document.getElementById('corda1_casa4')
let corda1_casa5 = document.getElementById('corda1_casa5')
let corda1_casa6 = document.getElementById('corda1_casa6')
let corda1_casa7 = document.getElementById('corda1_casa7')
let corda1_casa8 = document.getElementById('corda1_casa8')
let corda1_casa9 = document.getElementById('corda1_casa9')
let corda1_casa10 = document.getElementById('corda1_casa10')
let corda1_casa11 = document.getElementById('corda1_casa11')
let corda1_casa12 = document.getElementById('corda1_casa12')
let corda1_casa13 = document.getElementById('corda1_casa13')
let corda1_casa14 = document.getElementById('corda1_casa14')
let corda1_casa15 = document.getElementById('corda1_casa15')
//****************************************************************/
let corda2_casa0 = document.getElementById('corda2_casa0')
let corda2_casa1 = document.getElementById('corda2_casa1')
let corda2_casa2 = document.getElementById('corda2_casa2')
let corda2_casa3 = document.getElementById('corda2_casa3')
let corda2_casa4 = document.getElementById('corda2_casa4')
let corda2_casa5 = document.getElementById('corda2_casa5')
let corda2_casa6 = document.getElementById('corda2_casa6')
let corda2_casa7 = document.getElementById('corda2_casa7')
let corda2_casa8 = document.getElementById('corda2_casa8')
let corda2_casa9 = document.getElementById('corda2_casa9')
let corda2_casa10 = document.getElementById('corda2_casa10')
let corda2_casa11 = document.getElementById('corda2_casa11')
let corda2_casa12 = document.getElementById('corda2_casa12')
let corda2_casa13 = document.getElementById('corda2_casa13')
let corda2_casa14 = document.getElementById('corda2_casa14')
let corda2_casa15 = document.getElementById('corda2_casa15')
//****************************************************************/
let corda3_casa0 = document.getElementById('corda3_casa0')
let corda3_casa1 = document.getElementById('corda3_casa1')
let corda3_casa2 = document.getElementById('corda3_casa2')
let corda3_casa3 = document.getElementById('corda3_casa3')
let corda3_casa4 = document.getElementById('corda3_casa4')
let corda3_casa5 = document.getElementById('corda3_casa5')
let corda3_casa6 = document.getElementById('corda3_casa6')
let corda3_casa7 = document.getElementById('corda3_casa7')
let corda3_casa8 = document.getElementById('corda3_casa8')
let corda3_casa9 = document.getElementById('corda3_casa9')
let corda3_casa10 = document.getElementById('corda3_casa10')
let corda3_casa11 = document.getElementById('corda3_casa11')
let corda3_casa12 = document.getElementById('corda3_casa12')
let corda3_casa13 = document.getElementById('corda3_casa13')
let corda3_casa14 = document.getElementById('corda3_casa14')
let corda3_casa15 = document.getElementById('corda3_casa15')
//****************************************************************/
let corda4_casa0 = document.getElementById('corda4_casa0')
let corda4_casa1 = document.getElementById('corda4_casa1')
let corda4_casa2 = document.getElementById('corda4_casa2')
let corda4_casa3 = document.getElementById('corda4_casa3')
let corda4_casa4 = document.getElementById('corda4_casa4')
let corda4_casa5 = document.getElementById('corda4_casa5')
let corda4_casa6 = document.getElementById('corda4_casa6')
let corda4_casa7 = document.getElementById('corda4_casa7')
let corda4_casa8 = document.getElementById('corda4_casa8')
let corda4_casa9 = document.getElementById('corda4_casa9')
let corda4_casa10 = document.getElementById('corda4_casa10')
let corda4_casa11 = document.getElementById('corda4_casa11')
let corda4_casa12 = document.getElementById('corda4_casa12')
let corda4_casa13 = document.getElementById('corda4_casa13')
let corda4_casa14 = document.getElementById('corda4_casa14')
let corda4_casa15 = document.getElementById('corda4_casa15')
//****************************************************************/
let corda5_casa0 = document.getElementById('corda5_casa0')
let corda5_casa1 = document.getElementById('corda5_casa1')
let corda5_casa2 = document.getElementById('corda5_casa2')
let corda5_casa3 = document.getElementById('corda5_casa3')
let corda5_casa4 = document.getElementById('corda5_casa4')
let corda5_casa5 = document.getElementById('corda5_casa5')
let corda5_casa6 = document.getElementById('corda5_casa6')
let corda5_casa7 = document.getElementById('corda5_casa7')
let corda5_casa8 = document.getElementById('corda5_casa8')
let corda5_casa9 = document.getElementById('corda5_casa9')
let corda5_casa10 = document.getElementById('corda5_casa10')
let corda5_casa11 = document.getElementById('corda5_casa11')
let corda5_casa12 = document.getElementById('corda5_casa12')
let corda5_casa13 = document.getElementById('corda5_casa13')
let corda5_casa14 = document.getElementById('corda5_casa14')
let corda5_casa15 = document.getElementById('corda5_casa15')
//****************************************************************/
let corda6_casa0 = document.getElementById('corda6_casa0')
let corda6_casa1 = document.getElementById('corda6_casa1')
let corda6_casa2 = document.getElementById('corda6_casa2')
let corda6_casa3 = document.getElementById('corda6_casa3')
let corda6_casa4 = document.getElementById('corda6_casa4')
let corda6_casa5 = document.getElementById('corda6_casa5')
let corda6_casa6 = document.getElementById('corda6_casa6')
let corda6_casa7 = document.getElementById('corda6_casa7')
let corda6_casa8 = document.getElementById('corda6_casa8')
let corda6_casa9 = document.getElementById('corda6_casa9')
let corda6_casa10 = document.getElementById('corda6_casa10')
let corda6_casa11 = document.getElementById('corda6_casa11')
let corda6_casa12 = document.getElementById('corda6_casa12')
let corda6_casa13 = document.getElementById('corda6_casa13')
let corda6_casa14 = document.getElementById('corda6_casa14')
let corda6_casa15 = document.getElementById('corda6_casa15')
//*****************************************************************************************************/


let corda1 = [corda1_casa0, corda1_casa1, corda1_casa2, corda1_casa3, corda1_casa4, corda1_casa5, corda1_casa6, corda1_casa7, corda1_casa8, corda1_casa9, corda1_casa10, corda1_casa11, corda1_casa12, corda1_casa13, corda1_casa14, corda1_casa15]
let corda2 = [corda2_casa0, corda2_casa1, corda2_casa2, corda2_casa3, corda2_casa4, corda2_casa5, corda2_casa6, corda2_casa7, corda2_casa8, corda2_casa9, corda2_casa10, corda2_casa11, corda2_casa12, corda2_casa13, corda2_casa14, corda2_casa15]
let corda3 = [corda3_casa0, corda3_casa1, corda3_casa2, corda3_casa3, corda3_casa4, corda3_casa5, corda3_casa6, corda3_casa7, corda3_casa8, corda3_casa9, corda3_casa10, corda3_casa11, corda3_casa12, corda3_casa13, corda3_casa14, corda3_casa15]
let corda4 = [corda4_casa0, corda4_casa1, corda4_casa2, corda4_casa3, corda4_casa4, corda4_casa5, corda4_casa6, corda4_casa7, corda4_casa8, corda4_casa9, corda4_casa10, corda4_casa11, corda4_casa12, corda4_casa13, corda4_casa14, corda4_casa15]
let corda5 = [corda5_casa0, corda5_casa1, corda5_casa2, corda5_casa3, corda5_casa4, corda5_casa5, corda5_casa6, corda5_casa7, corda5_casa8, corda5_casa9, corda5_casa10, corda5_casa11, corda5_casa12, corda5_casa13, corda5_casa14, corda5_casa15]
let corda6 = [corda6_casa0, corda6_casa1, corda6_casa2, corda6_casa3, corda6_casa4, corda6_casa5, corda6_casa6, corda6_casa7, corda6_casa8, corda6_casa9, corda6_casa10, corda6_casa11, corda6_casa12, corda6_casa13, corda6_casa14, corda6_casa15]

//******************************************************************************************************/










let escalas = document.getElementById('escalas')
let acordes = document.getElementById('acordes')
let arpejos = document.getElementById('arpejos')
let quadroEscalas = document.getElementById('quadroEscalas')
let quadroAcordes = document.getElementById('quadroAcordes')
let quadroArpejos = document.getElementById('quadroArpejos')


acordes.onmouseover = function () {

    quadroAcordes.style.display = 'block'
    acordes.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroEscalas.style.display = 'none'

}

arpejos.onmouseover = function () {

    quadroArpejos.style.display = 'block'
    arpejos.style.backgroundColor = 'black'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroAcordes.style.display = 'none'
    quadroEscalas.style.display = 'none'

}

escalas.onmouseover = function () {

    quadroEscalas.style.display = 'block'
    escalas.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroAcordes.style.display = 'none'

}


clear.onclick = function () {

    pestana.style.display = 'none'
    moldura.style.display = 'none'
    console.log('limpar')

    apagar()
}




mostrar.onclick = function () {


    for (i = 0; i < nota.length; i++) {

        nota[i].style.display = 'block'

    }

    console.log('mostrar')


}
//************************************************************************************************** */
function cMaior(posicao) {



    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

    if (posicao == 2) {

        apagar()

        corda5[3].style.display = 'block'
        corda5[3].style.backgroundColor = 'greenyellow'

        corda4[5].style.display = 'block'
        corda4[5].style.backgroundColor = 'greenyellow'

        corda3[5].style.display = 'block'
        corda3[5].style.backgroundColor = 'greenyellow'

        corda2[5].style.display = 'block'
        corda2[5].style.backgroundColor = 'greenyellow'

        corda1[3].style.display = 'block'
        corda1[3].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        corda6[8].style.display = 'block'
        corda6[8].style.backgroundColor = 'greenyellow'

        corda5[7].style.display = 'block'
        corda5[7].style.backgroundColor = 'greenyellow'

        corda4[5].style.display = 'block'
        corda4[5].style.backgroundColor = 'greenyellow'

        corda3[5].style.display = 'block'
        corda3[5].style.backgroundColor = 'greenyellow'

        corda2[5].style.display = 'block'
        corda2[5].style.backgroundColor = 'greenyellow'

        corda1[8].style.display = 'block'
        corda1[8].style.backgroundColor = 'greenyellow'

    } else if (posicao == 4) {

        apagar()

        pestanaF(8)

        corda5[10].style.display = 'block'
        corda5[10].style.backgroundColor = 'greenyellow'

        corda4[10].style.display = 'block'
        corda4[10].style.backgroundColor = 'greenyellow'

        corda3[9].style.display = 'block'
        corda3[9].style.backgroundColor = 'greenyellow'



    } else if (posicao == 5) {

        apagar()



        corda4[10].style.display = 'block'
        corda4[10].style.backgroundColor = 'greenyellow'

        corda3[12].style.display = 'block'
        corda3[12].style.backgroundColor = 'greenyellow'

        corda2[13].style.display = 'block'
        corda2[13].style.backgroundColor = 'greenyellow'

        corda1[12].style.display = 'block'
        corda1[12].style.backgroundColor = 'greenyellow'

    }

}

function cSMaior(posicao) {



    apagar()

    corda5[4].style.display = 'block'
    corda5[4].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda4[3].innerHTML = 'E#'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[1].style.display = 'block'
    corda1[1].style.backgroundColor = 'greenyellow'

    corda1[1].innerHTML = 'E#'

    if (posicao == 2) {

        apagar()

        corda5[4].style.display = 'block'
        corda5[4].style.backgroundColor = 'greenyellow'

        corda4[6].style.display = 'block'
        corda4[6].style.backgroundColor = 'greenyellow'

        corda3[6].style.display = 'block'
        corda3[6].style.backgroundColor = 'greenyellow'

        corda2[6].style.display = 'block'
        corda2[6].style.backgroundColor = 'greenyellow'
        corda2[6].innerHTML = 'E#'

        corda1[4].style.display = 'block'
        corda1[4].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        corda6[9].style.display = 'block'
        corda6[9].style.backgroundColor = 'greenyellow'

        corda5[8].style.display = 'block'
        corda5[8].style.backgroundColor = 'greenyellow'
        corda5[8].innerHTML = 'E#'

        corda4[6].style.display = 'block'
        corda4[6].style.backgroundColor = 'greenyellow'

        corda3[6].style.display = 'block'
        corda3[6].style.backgroundColor = 'greenyellow'

        corda2[6].style.display = 'block'
        corda2[6].style.backgroundColor = 'greenyellow'

        corda1[9].style.display = 'block'
        corda1[9].style.backgroundColor = 'greenyellow'

    } else if (posicao == 4) {

        apagar()

        pestanaF(9)

        corda5[11].style.display = 'block'
        corda5[11].style.backgroundColor = 'greenyellow'

        corda4[11].style.display = 'block'
        corda4[11].style.backgroundColor = 'greenyellow'

        corda3[10].style.display = 'block'
        corda3[10].style.backgroundColor = 'greenyellow'
        corda3[10].innerHTML = 'E#'



    } else if (posicao == 5) {

        apagar()



        corda4[11].style.display = 'block'
        corda4[11].style.backgroundColor = 'greenyellow'

        corda3[13].style.display = 'block'
        corda3[13].style.backgroundColor = 'greenyellow'

        corda2[14].style.display = 'block'
        corda2[14].style.backgroundColor = 'greenyellow'

        corda1[13].style.display = 'block'
        corda1[13].style.backgroundColor = 'greenyellow'
        corda1[13].innerHTML = 'E#'

    }

}

function cMenor(posicao) {

    apagar()

    pestanaF(3)

    corda4[5].style.display = 'block'
    corda4[5].style.backgroundColor = 'greenyellow'

    corda3[5].style.display = 'block'
    corda3[5].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'gray'
    corda6[3].innerHTML = 'X'

    corda2[4].innerHTML = 'Eb'


}

//************************************************************************************************** */
function c7(posicao) {

    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[3].style.display = 'block'
    corda3[3].style.backgroundColor = 'greenyellow'
    corda3[3].innerHTML = 'Bb'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'



}

//********************************************************************************************** */

function dMaior(posicao) {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'

    if (posicao == 2) {

        apagar()

        corda5[5].style.display = 'block'
        corda5[5].style.backgroundColor = 'greenyellow'

        corda4[4].style.display = 'block'
        corda4[4].style.backgroundColor = 'greenyellow'

        corda3[2].style.display = 'block'
        corda3[2].style.backgroundColor = 'greenyellow'

        corda2[3].style.display = 'block'
        corda2[3].style.backgroundColor = 'greenyellow'

        corda1[2].style.display = 'block'
        corda1[2].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        pestanaF(5)

        corda6[5].innerHTML = 'X'
        corda6[5].style.display = 'block'
        corda6[5].backgroundColor = 'gray'

        corda4[7].style.display = 'block'
        corda4[7].style.backgroundColor = 'greenyellow'

        corda3[7].style.display = 'block'
        corda3[7].style.backgroundColor = 'greenyellow'

        corda2[7].style.display = 'block'
        corda2[7].style.backgroundColor = 'greenyellow'



    } else if (posicao == 4) {

        apagar()


        corda6[10].style.display = 'block'
        corda6[10].style.backgroundColor = 'greenyellow'

        corda5[9].style.display = 'block'
        corda5[9].style.backgroundColor = 'greenyellow'

        corda4[7].style.display = 'block'
        corda4[7].style.backgroundColor = 'greenyellow'

        corda3[7].style.display = 'block'
        corda3[7].style.backgroundColor = 'greenyellow'

        corda2[7].style.display = 'block'
        corda2[7].style.backgroundColor = 'greenyellow'

        corda1[10].style.display = 'block'
        corda1[10].style.backgroundColor = 'greenyellow'



    } else if (posicao == 5) {

        apagar()

        pestanaF(10)


        corda5[12].style.display = 'block'
        corda5[12].style.backgroundColor = 'greenyellow'

        corda4[12].style.display = 'block'
        corda4[12].style.backgroundColor = 'greenyellow'

        corda3[11].style.display = 'block'
        corda3[11].style.backgroundColor = 'greenyellow'





    }



}

//*************************************************************************************** */

function d7(posicao) {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'

}

function eMaior(posicao) {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[0].style.display = 'block'
    corda2[0].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

//************************************************************************************** */
function e7(posicao) {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

function fMaior(posicao) {

    apagar()
    pestanaF(1)



    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'



}

function gMaior(posicao) {

    apagar()

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[3].style.display = 'block'
    corda1[3].style.backgroundColor = 'greenyellow'


}

function aMaior(posicao) {

    apagar()

    corda5[0].style.display = 'block'
    corda5[0].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

function bMaior(posicao) {

    apagar()

    pestanaF(2)
    corda4[4].style.display = 'block'
    corda4[4].style.backgroundColor = 'greenyellow'

    corda3[4].style.display = 'block'
    corda3[4].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'
}


function apagar() {

    pestana.style.display = 'none'
    moldura.style.display = 'none'


    for (i = 0; i < nota.length; i++) {

        nota[i].style.display = 'none'
    }


}

apagar()
//**************************************************************************************************/

let bracoGuitarra = [
    [],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
    ['D', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
    ['A', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']]




let escalaCromatica = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
let escalaCMaior = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let escalaCMenorNatural = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCMenorHarmonica = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B']
let escalaCMenorMelodica = ['C', 'D', 'Eb', 'F', 'G', 'A', 'B']
let escalaCJonio = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let escalaCMixolidio = ['C', 'D', 'E', 'F', 'G', 'A', 'Bb']
let escalaCLidio = ['C', 'D', 'E', 'F#', 'G', 'A', 'B']
let escalaCEolio = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCDorico = ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb']
let escalaCFrigio = ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCLocrio = ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb']

let triadeC = ['C', 'E', 'G']
let triadeCm = ['C', 'Eb', 'G']
let triadeCDim = ['C', 'Eb', 'Gb']
let triadeCAum = ['C', 'E', 'G#']

let tetradeC7M = ['C', 'E', 'G', 'B']
let tetradeC7 = ['C', 'E', 'G', 'Bb']
let tetradeCm7 = ['C', 'Eb', 'G', 'Bb']
let tetradeCm7b5 = ['C', 'Eb', 'Gb', 'Bb']
let tetradeCDim = ['C', 'Eb', 'Gb', 'Bbb']
let tetradeCm7M = ['C', 'Eb', 'G', 'B']


let escalaGMaior = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
let escalaGMenorNatural = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGMenorHarmonica = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#', 'G']
let escalaGMenorMelodica = ['G', 'A', 'Bb', 'C', 'D', 'E', 'F#', 'G']
let escalaGJonio = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
let escalaGMixolidio = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
let escalaGLidio = ['G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G']
let escalaGEolio = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGDorico = ['G', 'A', 'Bb', 'C', 'D', 'E', 'F', 'G']
let escalaGFrigio = ['G', 'Ab', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGLocrio = ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']

let triadeG = ['G', 'B', 'D']
let triadeGm = ['G', 'Bb', 'D']
let triadeGDim = ['G', 'Bb', 'Db']
let triadeGAum = ['G', 'B', 'D#']

let tetradeG7M = ['G', 'B', 'D', 'F#']
let tetradeG7 = ['G', 'B', 'D', 'F']
let tetradeGm7 = ['G', 'Bb', 'D', 'F']
let tetradeGm7b5 = ['G', 'Bb', 'Db', 'F']
let tetradeGDim = ['G', 'Bb', 'Db', 'Fbb']
let tetradeGm7M = ['G', 'Bb', 'D', 'F#']

function pestanaF(casa) {

    pestana.style.display = 'block'

    if (casa == 1) {

        pestana.style.left = '150px'

    } else if (casa == 2) {

        pestana.style.left = '230px'

    } else if (casa == 3) {

        pestana.style.left = '310px'

    } else if (casa == 4) {

        pestana.style.left = '390px'

    } else if (casa == 5) {

        pestana.style.left = '470px'

    } else if (casa == 6) {

        pestana.style.left = '550px'

    } else if (casa == 7) {

        pestana.style.left = '630px'

    } else if (casa == 8) {

        pestana.style.left = '710px'

    } else if (casa == 9) {

        pestana.style.left = '790px'

    } else if (casa == 10) {

        pestana.style.left = '870px'

    } else if (casa == 11) {

        pestana.style.left = '950px'

    } else if (casa == 12) {

        pestana.style.left = '1030px'

    }

}

function mostrarC() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'C') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'C') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'C') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'C') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'C') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarCS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'C#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'C#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'C#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'C#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'C#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarDb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Db'



        }
        if (corda2[i].textContent == 'C#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Db'



        }

        if (corda3[i].textContent == 'C#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Db'


        }

        if (corda4[i].textContent == 'C#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Db'


        }

        if (corda5[i].textContent == 'C#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Db'


        }

        if (corda6[i].textContent == 'C#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Db'


        }


    }

}


function mostrarD() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'D') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'D') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'D') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'D') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'D') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarDS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'D#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'D#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'D#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'D#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'D#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarEb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Eb'



        }
        if (corda2[i].textContent == 'D#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Eb'


        }

        if (corda3[i].textContent == 'D#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Eb'

        }

        if (corda4[i].textContent == 'D#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Eb'


        }

        if (corda5[i].textContent == 'D#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Eb'


        }

        if (corda6[i].textContent == 'D#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Eb'


        }


    }

}


function mostrarE() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'E') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'E') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'E') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'E') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'E') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'E') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarF() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'F') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'F') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'F') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'F') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'F') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarGb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Gb'



        }
        if (corda2[i].textContent == 'F#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Gb'



        }

        if (corda3[i].textContent == 'F#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Gb'

        }

        if (corda4[i].textContent == 'F#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Gb'


        }

        if (corda5[i].textContent == 'F#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Gb'


        }

        if (corda6[i].textContent == 'F#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Gb'


        }


    }

}


function mostrarFS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'F#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'F#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'F#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'F#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'F#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarG() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'G') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'G') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'G') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'G') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'G') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarAb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Ab'


        }
        if (corda2[i].textContent == 'G#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Ab'



        }

        if (corda3[i].textContent == 'G#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Ab'

        }

        if (corda4[i].textContent == 'G#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Ab'


        }

        if (corda5[i].textContent == 'G#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Ab'


        }

        if (corda6[i].textContent == 'G#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Ab'


        }


    }

}

function mostrarGS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'G#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'G#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'G#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'G#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'G#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarA() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'A') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'A') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'A') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'A') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'A') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarBb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Bb'



        }
        if (corda2[i].textContent == 'A#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Bb'


        }

        if (corda3[i].textContent == 'A#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Bb'

        }

        if (corda4[i].textContent == 'A#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Bb'


        }

        if (corda5[i].textContent == 'A#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Bb'


        }

        if (corda6[i].textContent == 'A#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Bb'


        }


    }

}




function mostrarAS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'A#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'A#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'A#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'A#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'A#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}




function mostrarB() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'B') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'B') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'B') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'B') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'B') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'B') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function escalaCMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaGMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaDMaiorF() {

    apagar()
    mostrarCS()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaAMaiorF() {

    apagar()
    mostrarCS()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarA()
    mostrarB()

}

function escalaEMaiorF() {

    apagar()
    mostrarCS()
    mostrarDS()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarA()
    mostrarB()

}

function escalaBMaiorF() {

    apagar()
    mostrarCS()
    mostrarDS()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarAS()
    mostrarB()

}

function escalaFMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarBb()

}

function escalaBbMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarBb()

}

function escalaEbMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarAb()
    mostrarBb()

}

function escalaDbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarGb()
    mostrarAb()
    mostrarBb()

}

function escalaGbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarGb()
    mostrarAb()
    mostrarBb()

}

function escalaAbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarAb()
    mostrarBb()

}





//*********************************************************************************************************/




apagar()

estrutura.style.display = 'none'
tipo.style.display = 'none'
tonalidade.style.display = 'none'
direita.style.display = 'none'
esquerda.style.display = 'none'
posicao.style.borderLeftColor = 'orangered'

for (i = 0; i < corda.length; i++) {

    corda[i].style.backgroundColor = 'orangered'


}

for (i = 0; i < traste.length; i++) {

    traste[i].style.backgroundColor = 'orangered'


}

for (i = 0; i < bolinha.length; i++) {

    bolinha[i].style.backgroundColor = 'orangered'


}

body.style.backgroundColor = '#1F3340'




let funcaoVelocidade = function treinarVelocidade(batidas = 10, minutos = 1) {

    setInterval(function () {

        if (tocando == true) {

            bpm += batidas
            andamento.innerHTML = bpm + ' BPM'
            click.src = bpm + ' BPM.mp3'
            click.currentTime = 0
            click.play()
            verificaBpm()
            if (bpm == 120) {

                camada1.style.animation = 'pisca2 0.5s linear infinite'


            } else if (bpm == 240) {

                camada1.style.animation = 'pisca2 0.25s linear infinite'


            } else if (bpm == 65) {

                camada1.style.animation = 'pisca2 0.92s linear infinite'


            } else if (bpm == 70) {

                camada1.style.animation = 'pisca2 0.85s linear infinite'


            } else if (bpm == 75) {

                camada1.style.animation = 'pisca2 0.8s linear infinite'


            } else if (bpm == 80) {

                camada1.style.animation = 'pisca2 0.75s linear infinite'


            } else if (bpm == 85) {

                camada1.style.animation = 'pisca2 0.70s linear infinite'


            } else if (bpm == 90) {

                camada1.style.animation = 'pisca2 0.66s linear infinite'


            } else if (bpm == 95) {

                camada1.style.animation = 'pisca2 0.63s linear infinite'


            } else if (bpm == 100) {

                camada1.style.animation = 'pisca2 0.6s linear infinite'


            } else if (bpm == 105) {

                camada1.style.animation = 'pisca2 0.57s linear infinite'


            } else if (bpm == 110) {

                camada1.style.animation = 'pisca2 0.54s linear infinite'


            } else if (bpm == 115) {

                camada1.style.animation = 'pisca2 0.52s linear infinite'


            } else if (bpm == 120) {

                camada1.style.animation = 'pisca2 0.5s linear infinite'


            } else if (bpm == 125) {

                camada1.style.animation = 'pisca2 0.48s linear infinite'


            } else if (bpm == 130) {

                camada1.style.animation = 'pisca2 0.46s linear infinite'


            } else if (bpm == 135) {

                camada1.style.animation = 'pisca2 0.44s linear infinite'


            } else if (bpm == 140) {

                camada1.style.animation = 'pisca2 0.42s linear infinite'


            } else if (bpm == 145) {

                camada1.style.animation = 'pisca2 0.41s linear infinite'


            } else if (bpm == 150) {

                camada1.style.animation = 'pisca2 0.4s linear infinite'


            } else if (bpm == 155) {

                camada1.style.animation = 'pisca2 0.38s linear infinite'


            } else if (bpm == 160) {

                camada1.style.animation = 'pisca2 0.375s linear infinite'


            } else if (bpm == 165) {

                camada1.style.animation = 'pisca2 0.36s linear infinite'


            } else if (bpm == 170) {

                camada1.style.animation = 'pisca2 0.35s linear infinite'


            } else if (bpm == 175) {

                camada1.style.animation = 'pisca2 0.34s linear infinite'


            } else if (bpm == 180) {

                camada1.style.animation = 'pisca2 0.33s linear infinite'


            } else if (bpm == 185) {

                camada1.style.animation = 'pisca2 0.32s linear infinite'


            } else if (bpm == 190) {

                camada1.style.animation = 'pisca2 0.31s linear infinite'


            } else if (bpm == 195) {

                camada1.style.animation = 'pisca2 0.307s linear infinite'


            } else if (bpm == 200) {

                camada1.style.animation = 'pisca2 0.3s linear infinite'


            } else if (bpm == 205) {

                camada1.style.animation = 'pisca2 0.292s linear infinite'


            } else if (bpm == 210) {

                camada1.style.animation = 'pisca2 0.285s linear infinite'


            } else if (bpm == 215) {

                camada1.style.animation = 'pisca2 0.279s linear infinite'


            } else if (bpm == 220) {

                camada1.style.animation = 'pisca2 0.272s linear infinite'


            } else if (bpm == 225) {

                camada1.style.animation = 'pisca2 0.266s linear infinite'


            } else if (bpm == 230) {

                camada1.style.animation = 'pisca2 0.260s linear infinite'


            } else if (bpm == 235) {

                camada1.style.animation = 'pisca2 0.255s linear infinite'


            } else if (bpm == 240) {

                camada1.style.animation = 'pisca2 0.25s linear infinite'


            }

        } else if (tocando == false) {

            bpm += batidas
            andamento.innerHTML = bpm + ' BPM'
            click.src = bpm + ' BPM.mp3'
            click.currentTime = 10
            verificaBpm()
            camada1.style.animation = ''


        }


    }, 1000 * 60 * minutos)

}



for (i = 0; i < corda.length; i++) {

    
    corda[i].style.zIndex = 11
    corda[i].style.transition = 'all 2s'


}

for (i = 0; i < traste.length; i++) {

    traste[i].style.zIndex = 11
    traste[i].style.transition = 'all 2s'


}

for (i = 0; i < nota.length; i++) {

    
    nota[i].style.zIndex = 13
    nota[i].style.transition = 'all 2s'

}

for (i = 0; i < bolinha.length; i++) {

    
    bolinha[i].style.zIndex = 11
    bolinha[i].style.transition = 'all 2s'

}

for (i = 0; i < bolinha.length; i++){
    
    bolinha[i].style.backgroundColor = 'gray'

}

/*

let audio2 = document.getElementById('audio2')

setInterval(function () {

    
    if(audio2.currentTime >= 4){

        apagar()

        corda5[5].style.display = 'block'
        corda4[6].style.display = 'block'
        corda3[5].style.display = 'block'
        corda2[6].style.display = 'block'

        console.log('teste')


    }

    if(audio2.currentTime >= 6){

        apagar()

        corda6[3].style.display = 'block'
        corda4[3].style.display = 'block'
        corda3[4].style.display = 'block'
        corda2[4].style.display = 'block'



    }

    if(audio2.currentTime >= 8){

        apagar()

        corda5[3].style.display = 'block'
        corda4[5].style.display = 'block'
        corda3[3].style.display = 'block'
        corda2[4].style.display = 'block'

        console.log('teste')


    }

    if(audio2.currentTime >= 12){

        apagar()

        corda5[5].style.display = 'block'
        corda4[6].style.display = 'block'
        corda3[5].style.display = 'block'
        corda2[6].style.display = 'block'

        console.log('teste')


    }

    if(audio2.currentTime >= 14){

        apagar()

        corda6[3].style.display = 'block'
        corda4[3].style.display = 'block'
        corda3[4].style.display = 'block'
        corda2[4].style.display = 'block'



    }

    if(audio2.currentTime >= 16){

        apagar()

        corda5[3].style.display = 'block'
        corda4[5].style.display = 'block'
        corda3[3].style.display = 'block'
        corda2[4].style.display = 'block'

        console.log('teste')


    }

    
}, 500)
*/

console.log('teste')