function buscarPais(nomepais) {
    var seletor = document.getElementById('seletor')

    //https://pokeapi.co/api/v2/pokemon/
    // fetch("https://restcountries.com/v3.1/name/a")
    var id = seletor.value
    var url = "https://pokeapi.co/api/v2/pokemon/"
    
    fullUrl = url+id
    // console.log('qweqwe',fullUrl)
    fetch(fullUrl)
        .then(response1 => response1.json())
        .then(response1 => exibir1(response1))
    function exibir1(dados1) {
        console.clear()
        console.log(dados1)
        // console.log('sdsgdsfg',dados1[seletor.value])
        var mostraInfo = document.getElementById("mostra__informacoes")
        mostraInfo.innerHTML =
            `
            <h1>Nome: ${dados1['name'].toUpperCase()}</h1>
            <h2>Tipo: ${dados1['types'][0]['type']['name'].toUpperCase()}</h2>
            <h2>Habilidade 1: ${dados1['abilities'][0]['ability']['name'].toUpperCase()}</h2>
            <h2>Habilidade 2: ${dados1['abilities'][1]['ability']['name'].toUpperCase()}</h2>
            
            
            <img src="${dados1['sprites']['front_default']}" alt="">
            <img src="${dados1['sprites']['back_default']}" alt="">
            `
    }
}

// <h2>Linguagem: ${dados1[seletor.value]['languages']['por']}</h2>

//Dados para o select de pokemons
fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0/")
    .then(response => response.json())
    .then(response => exibir(response))
function exibir(dados) {
    var seletor = document.getElementById('seletor')//onde aparece a informação
    console.log(dados['count'])
    // console.log(dados)
    for (i = 0; i < dados['count']; i++) {
               
        seletor.innerHTML +=
            `        
        <option value="${i+1}">${i} ${dados['results'][i]['name']}</option>
        `
        // console.log(dados['results'][i]['name'])
    }
}

