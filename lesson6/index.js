import Pokemon from "./Pokemon.js";
import Pokeapi from "./ApiSerivice.js";
import ErrorMessage from "./Notifications.js";

const renderAllPokemon = (pokemonData) => {
  const pokemons = [];
  pokemonData.forEach((e) => {
      pokemons.push(fetch(e.url).then((res) => res.json())); 
  });
  return Promise.all(pokemons)
          .then(pokemons => {
            localStorage.setItem("pokemons", JSON.stringify(pokemons.map(e => ({
              name: e.name,
              height: e.height,
              weight: e.weight,
              id: e.id,
              url: e.sprites.other["official-artwork"].front_default
          }))))
        })
        .then(() => renderPokemon())
}

const renderPokemon = () => {
  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  pokemons.forEach(pokemon => {
    new Pokemon(pokemon.name, pokemon.height, pokemon.weight, pokemon.id, pokemon.url).render();
  });
  loadingStatus.style.display = "none";
}

const loadPokemonDetails = (e) => {
  const url = e.target.dataset.url;
  const card = document.getElementById(url);
  if (card.classList.contains("hide")) {
    card.classList.remove("hide");
  } else {
    card.classList.add("hide");
  }
}

const loadData = async (e) => {
  errorMsg.style.display = "none";
  let inputValue = searchParams.value.split("-");
  if (inputValue.length === 2 && Number(inputValue[0]) && Number(inputValue[1])) {
    dataRow.innerHTML = "";
    loadingStatus.style.display = "block";
    await Pokeapi.getAllPokemons(Math.abs(Number(inputValue[0])), Math.abs(Number(inputValue[1])))
      .then((data) => {
        if (data.results) {
          return renderAllPokemon(data.results);
        }
        ErrorMessage.show("Something went wrong.");
      })
      .then(() => {
        document.querySelectorAll(".wrapper").forEach(card => card.addEventListener("click", loadPokemonDetails));
      })
      .catch((err) => {
        ErrorMessage.show(err.message);
      });
  } else {
    errorMsg.style.display = "block";
    dataRow.innerHTML = "";
  }
}

loadBtn.addEventListener("click", loadData);
