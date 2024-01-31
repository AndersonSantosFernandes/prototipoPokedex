

function loadpk() {




    //imput que vem o número do id
    id = document.getElementById("id__nome__pokemon")
    let url = 'https://pokeapi.co/api/v2/pokemon/';


    if (id.value.length == 0) {

        // solo = url;
        // fetch(solo)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.clear();
        //         console.log(data);
        //         document.getElementById("descricao").innerHTML = data['results']['12']['name']
        //         document.getElementById("id").innerHTML = data['results']['0']['name']
        //         let img = ""
        //         document.getElementById("pic").setAttribute('src', img);
        //     })
    } else {

        solo = url + id.value.toLowerCase() + '/'

        fetch(solo)
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                console.clear();
                // console.log(data);

                
                        //Switch que define a cor de fundo de cada card
            switch (data['types'][0]['type']['name']) {
                case "fire":
                    fundo = "orange"
                    break;
                case "normal":
                    fundo = "white"
                    break;
                case "poison":
                    fundo = "black"
                    break;
                case "electric":
                    fundo = "gray"
                    break;
                case "grass":
                    fundo = "green"
                    break;
                case "psychic":
                    fundo = "tomato"
                    break;
                case "ice":
                    fundo = "aquamarine"
                    break;
                case "bug":
                    fundo = "burlywood"
                    break;
                case "steel":
                    fundo = "darkslategrey"
                    break;
                case "fighting":
                    fundo = "blueviolet"
                    break;
                case "rock":
                    fundo = "lawngreen"
                    break;
                case "ground":
                    fundo = "brown"
                    break;
                case "water":
                    fundo = "aqua"
                    break;
                    case "fairy":
                    fundo = "lightgreen"
                    break;

                default:
                    fundo = "white"
                    break;
            }



                document.getElementById("poderes").innerHTML =
                    `                     
                        Tamanho: ${data['height']}<br>
                        Peso: ${data['weight']}<br>
                        Habilidade 1: ${data['abilities']['0']['ability']['name'].toUpperCase()}<br>
                        Habilidade 2: ${data['abilities']['1']['ability']['name'].toUpperCase()}<br>
                        `


                document.getElementById("img__pokemon").innerHTML =
                    `
                    <div id="duasImgs">
                        
                       
                        <img style="background-color: ${fundo};" class="img__pokemonn" src="${data['sprites']['front_default']}" alt="${data['name']}"></img>
                        <img style="background-color: ${fundo};" class="img__pokemonn" src="${data['sprites']['back_default']}" alt="${data['name']}"></img>
                        </div>
                        `
                document.getElementById("retorna__nome").innerHTML = data['name'].toUpperCase()

                document.getElementById("numero__id").innerHTML = data['id']

            })

    }

}

fetch("https://pokeapi.co/api/v2/pokemon?limit=300&offset=0")
    .then(response2 => response2.json())
    .then(response2 => selectPokemon(response2))

function selectPokemon(returnPokemon) {
    var optionals = document.getElementById("id__nome__pokemon")

    for (let index = 0; index < returnPokemon['results'].length; index++) {

        optionals.innerHTML +=
            `
            <option value="${index+1}"> ${index+1} - ${returnPokemon['results'][index]['name']}</option>
            `
            
    }

    console.log(returnPokemon['results'].length)
}
function costas(){
    var frenteCostas = document.getElementById("duasImgs")
    frenteCostas.style.marginTop="-173px"
}
function frente(){
    var frenteCostas = document.getElementById("duasImgs")
    frenteCostas.style.marginTop="0px"   
}

