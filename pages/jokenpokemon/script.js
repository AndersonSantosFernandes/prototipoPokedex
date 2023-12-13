

//URL da API
let url = 'https://pokeapi.co/api/v2/pokemon/';


bichinhos = [3, 4, 15, 19, 31, 59, 5, 6, 25, 26, 33, 77, 150, 483, 133, 614, 645, 652, 663,658,689,675]

// console.log(bichinhos.length)
// inicio foreach 
bichinhos.forEach(function (monstrinhos) { 
    // console.log(monstrinhos)

    var retorno = url + monstrinhos + "/"

    fetch(retorno)
        //then tras o que está dentro do objeto e atribui a response
        .then((response) => {
            return response.json();
        })
        //them entra mais um nível do objeto e atribui a variável 'data'
        .then((data) => {
            // console.clear();
            // console.log(data);

            document.getElementById("pokemon__lista").innerHTML +=
                `  
                        <div class="col-md-2 selecionar__personagem">                             
                            
                            <button class="imgPers" onclick="escolher('${data['id']}')"><img  src="${data['sprites']['front_default']}" alt=""></button>
                            <br><br>
                            <h6>${data['name'].toUpperCase()} </h6> 
                              <br>
                        </div>                              
                        
                        `
        })
})
//final foreach

function escolher(id) {

    document.getElementById("audio").innerHTML=
    `
    <audio id="music" style="height:30px;" controls preload="auto" autoplay>
    <source src="audio/01 - Pokémon Thema.mp3" type = "audio/mpeg">
    </audio>
    `

    // Concatena a url principal com a id do personagem escolhido vinda na função
    var jogador = url + id + "/"
    fetch(jogador)
    .then((retornarJogador) =>{
        return retornarJogador.json()
    })
    .then((dataJogador)=>{

        document.getElementById("imagem__jogador").innerHTML = 
        `
        <img id="retorno__jogador" src="${dataJogador['sprites']['front_default']}" alt="${dataJogador['name']}">
        
        `

         document.getElementById("fala__jogador").innerHTML =
         `
         Meu nome é ${dataJogador['name'].toUpperCase()} e vou te vencer!!!
         
         `
    })
    var idOponente = null
    var escolherOponente = Number.parseInt(Math.random() * 10 + 1)
   
    if(escolherOponente == 1){
        idOponente = 115
    }else if(escolherOponente == 2){
        idOponente = 142
    }else if(escolherOponente == 3){
        idOponente = 112
    }else if(escolherOponente == 4){
        idOponente = 160
    }else if(escolherOponente == 5){
        idOponente = 655
    }else if(escolherOponente == 6){
        idOponente = 697
    }else if(escolherOponente == 7){
        idOponente = 612
    }else if(escolherOponente == 8){
        idOponente = 621
    }else if(escolherOponente == 9){
        idOponente = 748
    }else if(escolherOponente == 10){
        idOponente = 812
    }

    var oponentes = url + idOponente + "/"
    console.clear()
    console.log(oponentes)
    fetch(oponentes)
    .then((retornarOponente) =>{
        return retornarOponente.json()
    })
    .then((dataOponente)=>{

        document.getElementById("imagem__oponente").innerHTML=
        `
        <img id="retorno__oponente" src="${dataOponente['sprites']['front_default']}" alt="${dataOponente['name']}">
                      
        
        `
        document.getElementById("fala__oponente").innerHTML=
        `
        É mesmo? Vamos ver se é realmente bom contra ${dataOponente['name'].toUpperCase()}
        
        `
        
    })          

    var esconder = document.getElementById("pokemon__lista")
    esconder.style.display = "none"

    var showGame = document.getElementById("show__game")
    showGame.style.display = "grid"

}
function sairDoJogo(){
    var esconder = document.getElementById("pokemon__lista")
    esconder.style.display = "flex"

    var showGame = document.getElementById("show__game")
    showGame.style.display = "none"
}


//trecho de codigo responsavel pela dinamica do jokenpo
ptsJogador = 0
ptsOponente = 0

function apostar(retornoAposta) {
    
    somaPontosJogador = document.getElementById("soma__pontos__jogador")
    somaPontosOponente = document.getElementById("soma__pontos__oponente")
    apostaJogador = document.getElementById("retorno__aposta__jgador")
    apostaOponente = document.getElementById("retorno__aposta__oponente")
    let oponente = Number.parseInt(Math.random() * 3 + 1) //Random máquina

    


    if (oponente == 1) {
        maquina = "pedra"
        //  alert("a maquina escolheu " + maquina + " e você escolheu " + retornoAposta )
    } else if (oponente == 2) {
        maquina = "papel"
        // alert("a maquina escolheu " + maquina + "e você escolheu " + retornoAposta )
    } else if (oponente == 3) {
        maquina = "tesoura"
        // alert("a maquina escolheu " + maquina + "e você escolheu " + retornoAposta )
    }

    if (maquina == retornoAposta) {

        apostar(retornoAposta)

     

        //Jogador perde
    } else if (maquina == "pedra" && retornoAposta == "tesoura") {
        //Aumenta pontos do oponente
        ptsOponente = ptsOponente + 1


        document.getElementById("fala__jogador").innerHTML =
            ` Reconheço que perdi, mas vamos continuar... `

        document.getElementById("fala__oponente").innerHTML =
            ` Ganhei, minha pedra qubrou sua tesoura
            <audio id="music" autoplay>
            <source src="audio/perdeu.mp3" type = "audio/mpeg">
            </audio>
            `

        //Imagem apostada jogador         
        apostaJogador.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/tesoura.png" alt="tesoura">`
        //Imagem apostada jogador   
        apostaOponente.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/pedra.png" alt="pedra">`

        //Jogador ganha
    } else if (maquina == "pedra" && retornoAposta == "papel") {
        //Aumenta pontos do jogador
        ptsJogador = ptsJogador + 1

        document.getElementById("fala__jogador").innerHTML =
            ` Ganhei essa, meu papel embrulhou sua pedra 
            <audio id="music" autoplay>
    <source src="audio/ganhou.mp3" type = "audio/mpeg">
    </audio>
            `

        document.getElementById("fala__oponente").innerHTML =
            ` Realmente ganhou, mas não me abato facilmente...`

        //Imagem apostada jogador         
        apostaJogador.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/papel.png" alt="papel">`
        //Imagem apostada jogador   
        apostaOponente.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/pedra.png" alt="pedra">`

        //Jogador ganha
    } else if (maquina == "tesoura" && retornoAposta == "pedra") {
        //Aumenta pontos do jogador
        ptsJogador = ptsJogador + 1

        document.getElementById("fala__jogador").innerHTML =
            ` Eu ganhei, minha pedra esmagou sua tesoura. Continua?
            <audio id="music" autoplay>
    <source src="audio/ganhou.mp3" type = "audio/mpeg">
    </audio>
            `

        document.getElementById("fala__oponente").innerHTML =
            ` Claro que continuo, ainda não acabou...`

        //Imagem apostada jogador         
        apostaJogador.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/pedra.png" alt="pedra">`
        //Imagem apostada jogador   
        apostaOponente.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/tesoura.png" alt="tesoura">`


        //Jogador perde
    } else if (maquina == "tesoura" && retornoAposta == "papel") {
        //Aumenta pontos do oponente
        ptsOponente = ptsOponente + 1

        document.getElementById("fala__jogador").innerHTML =
            ` Essa eu deixei de proposito! `

        document.getElementById("fala__oponente").innerHTML =
            ` Minha tesoura cortou seu papel 
            <audio id="music" autoplay>
            <source src="audio/perdeu.mp3" type = "audio/mpeg">
            </audio>
            `

        //Imagem apostada jogador         
        apostaJogador.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/papel.png" alt="papel">`
        //Imagem apostada jogador   
        apostaOponente.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/tesoura.png" alt="tesoura">`


        //Jogador perde
    } else if (maquina == "papel" && retornoAposta == "pedra") {
        //Aumenta pontos do oponente
        ptsOponente = ptsOponente + 1

        document.getElementById("fala__jogador").innerHTML =
            ` Não acredito que perdi essa `

        document.getElementById("fala__oponente").innerHTML =
            ` Eembrulhei sua pedra. Quer mesmo continuar?
            <audio id="music" autoplay>
            <source src="audio/perdeu.mp3" type = "audio/mpeg">
            </audio>
            `

        //Imagem apostada jogador         
        apostaJogador.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/pedra.png" alt="pedra">`
        //Imagem apostada jogador   
        apostaOponente.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/papel.png" alt="papel">`


        //Jogador ganha
    } else if (maquina == "papel" && retornoAposta == "tesoura") {
        //Aumenta pontos do jogador
        ptsJogador = ptsJogador + 1

        document.getElementById("fala__jogador").innerHTML =
            ` Picotei todo seu papel com minha tesoura
            <audio id="music" autoplay>
    <source src="audio/ganhou.mp3" type = "audio/mpeg">
    </audio>
            `

        document.getElementById("fala__oponente").innerHTML =
            `  
            É, picotou mesmo! Mas eu quero prosseguir...     `

        //Imagem apostada jogador         
        apostaJogador.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/tesoura.png" alt="tesoura">`
        //Imagem apostada jogador   
        apostaOponente.innerHTML = `<img class="imagens__apostadas" src="imgjokenpo/papel.png" alt="papel">`
    }

    somaPontosJogador.innerHTML = ptsJogador
    somaPontosOponente.innerHTML = ptsOponente

    limite = 10

    if (ptsJogador == limite || ptsOponente == limite) {

        document.getElementById("audio").innerHTML=
        `
        
        `

        acaoDoJogo = document.getElementById("acao__de__jogo")
        retornoApost = document.getElementById("retorno__aposta")

        if (ptsJogador == limite) {
            document.getElementById("fala__jogador").innerHTML =
                ` Ha, te venci por ${ptsJogador} a ${ptsOponente}, o que me diz? 
                <audio id="music" autoplay>
                <source src="audio/applausos.wav" type = "audio/mpeg">
                </audio>
                `

            document.getElementById("fala__oponente").innerHTML =
                `  
            Na proxima não serár tão fácil...    `

        } else if (ptsOponente == limite) {
            document.getElementById("fala__jogador").innerHTML =
                ` Reconheço a derrota. Mas nos veremos em outra partida 
                <audio id="music" autoplay>
                <source src="audio/perdeu2.mp3" type = "audio/mpeg">
                </audio>
                `

            document.getElementById("fala__oponente").innerHTML =
                `Te venci por ${ptsOponente} a ${ptsJogador}. Bom que reconhece quem é o mestre   `

        }
        acaoDoJogo.innerHTML = `<h2><center>O jogo está terminado</center><h2> `


        retornoApost.style.display = "none"
    }
}

