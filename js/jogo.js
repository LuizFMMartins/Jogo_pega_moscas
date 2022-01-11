
    let altura = 0
    let largura = 0
    let vidas = 1
    let tempo = 20
    let criaMoscaTempo = 1500

    let dificuldade = window.location.search
    dificuldade = dificuldade.replace("?"," ")
    if(dificuldade ==" facil"){
        criaMoscaTempo = 1500
        console.log("facil")
    } else if(dificuldade ==" normal"){
        criaMoscaTempo = 1000
        console.log("normal")
    } else if(dificuldade ==" dificil"){
        criaMoscaTempo = 750
        console.log("dificil")
    }
    

    
    function tamanhoTela(){

    altura = window.innerHeight
    largura = window.innerWidth
        console.log(largura, altura)  
    }

    tamanhoTela()

    let cronometro = setInterval( function(){
        tempo -=1    
                
        if(tempo < 0){
            
            
            clearInterval(cronometro)
            clearInterval(criarMoscas)
            window.location.href ="vitoria.html"
        }else{
           document.getElementById("cronometro").innerHTML = tempo 
        }
    }, 1000)

   let = criarMoscas = setInterval(
    function posicaoRandomica(){
    
    //remover mosca "se existir"
    
    if(document.getElementById("mosca")){
       document.getElementById("mosca").remove() 
    
    if(vidas == 3){
        window.location.href ="fim_de_jogo.html"
    }else{
        document.getElementById("v"+ vidas).src="imagens/imagens/coracao_vazio.png"
        vidas++
    } 
        
}
    
    
    //-------------------------------------------//


    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)

    //criar elemento html

    let mosca = document.createElement("img")
    mosca.src = "imagens/imagens/mosca.png"
    mosca.className= tamanhoAleatorio() + " " +ladoAleatorio()
    mosca.style.left = posicaoX + "px"
    mosca.style.top = posicaoY + "px"
    mosca.style.position = "absolute"
    document.body.appendChild(mosca)
    mosca.id = "mosca"
    mosca.onclick = (function(){
        this.remove()
    })

    console.log(tamanhoAleatorio ())
    ladoAleatorio()

    //---------------------------------------------//


    function tamanhoAleatorio (){
        let classe = Math.floor(Math.random()* 3)
        console.log(classe)

        switch(classe){
            case 0:
                return "mosca1"
            case 1:
                return "mosca2"
            case 2:
                return "mosca3"
        }
    }

    function ladoAleatorio(){
        let classe = Math.floor(Math.random()* 2) 
        switch(classe){
            case 0:
                return "ladoA"
            case 1:
                return "ladoB"
            
        }
    }
}
,criaMoscaTempo)


  



