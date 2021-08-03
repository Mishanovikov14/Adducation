const url = "https://pokeapi.co/api/v2/pokemon/";

function getPokemons(url) {
    const pokemons = [];
    for (let i = 1; i < 11; i++) {
        pokemons.push(fetch((`${url}${i}`))
                        .then(response => response.json()));
    }
    return Promise.all(pokemons)
        .then(pokemons => {
            localStorage.setItem("pokemons", JSON.stringify(pokemons.map(e => ({
                name: e.name,
                hight: e.hight,
                weight: e.weight,
                id: e.id
            }))))
        })
        .then(() => sortByHeight())
        .then(() => sortByWeight());
}

function sortByHeight() {
    const pokemons = JSON.parse(localStorage.getItem("pokemons"));
    if (pokemons) {
        sessionStorage.setItem("sortedByHeight", JSON.stringify(pokemons));
        pokemons.sort((a, b) => a.height - b.height);
        console.log('Sorted by height:');
        console.log(pokemons)
    }
}

function sortByWeight() {
    const pokemons = JSON.parse(localStorage.getItem("pokemons"));
    if (pokemons) {
        sessionStorage.setItem("sortedByWeight", JSON.stringify(pokemons));
        pokemons.sort((a, b) => a.weight - b.weight);
        console.log('Sorted by weight:');
        console.log(pokemons)
    }
}

getPokemons(url);
