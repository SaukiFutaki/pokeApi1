let button = document.getElementById("getPokemon");
let target = document.getElementById("space");

function getData() {
  const xhttp = new XMLHttpRequest();
  const method = "GET";
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  xhttp.open(method, url);
  xhttp.onload = function () {
    console.log(this.responseText);
    const result = JSON.parse(xhttp.responseText);
    const card = document.getElementById("card");
    const name = document.getElementById("name")
    const type = document.getElementById("type")

    const spriteUrl = result.sprites.front_default;
    const spriteImage = document.createElement("img");
    spriteImage.src = spriteUrl;

    img.innerHTML = '';
    img.appendChild(spriteImage);

    name.innerHTML = `${result.id}: ${result.name}`
    type.innerHTML = `Type: ${result.types[0].type.name}`

    card.setAttribute("class", result.name);
    card.style.display = "block"


  }
  xhttp.send();
};


