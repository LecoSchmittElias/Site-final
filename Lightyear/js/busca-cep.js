/* pesquisar com enter */
let input = document.getElementById("input-cep");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
    }
});


async function buscaCep() {
    const cep = document.getElementById("input-cep").value;
    if (cep === '') {
        javascript: alert('O campo cep não pode ficar em branco!');
        return;
    }
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    let rua = json.logradouro;
    let bairro = json.bairro;
    let cidade = json.localidade;
    let uf = json.uf;
    document.getElementById('search-address').innerHTML = "Você buscou pelo endereço";
    document.getElementById('rua-input').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg> ${rua}, ${bairro} - ${cidade} - ${uf}`;



    if (cep >= 89010000 && cep <= 89099999) {
        document.getElementById('response-true').innerHTML = `Que bom! Nós temos uma filial em ${json.localidade} c:`;
        document.getElementById('response-false').innerHTML = "";
    } else {
        document.getElementById('response-true').innerHTML = "";
        document.getElementById('response-false').innerHTML = "Ainda não temos uma filial na sua cidade :c";
    }

    document.getElementById('help').innerHTML = "";
    document.getElementById('search-cep').innerHTML = "<button class='reloadbtn' onclick='updateDiv()'>Nova busca</button>";

}
document.getElementById('searchbtn').addEventListener('click', buscaCep);



//tentei tudo pra der reload só na div mas só quebrei a cabeça, entao recarrega a pagina toda
function updateDiv() {
    location.reload();
}


/* 

    $("#content").load(location.href + " Borracharia\form-cep.html");
    $("#content").load(location.href + " #content");


onclick='updateDiv()'
    document.getElementById('search-cep').innerHTML = "";
    document.getElementById('after-search').innerHTML = `<div class="search" id="search-cep">
    
    <button type="button" class="newsearchbtn" id="newsearchbtn">

</button>
</div>`
    89010000
    89100000

}

document.getElementById('newsearchbtn').addEventListener('click', newSearch);

function newSearch() {
    document.getElementById('search-cep').innerHTML = `<div class="search" id="search-cep">
    <input type="text" id="input-cep" class="input-search" placeholder="00000000">
    <button type="button" class="searchbtn" id="searchbtn">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</button>
</div>`;

}*/