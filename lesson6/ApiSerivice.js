class Pokeapi {
  static BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

  static getAllPokemons = async (limit = 10, offset = 100) => {
    const response = await fetch(`${Pokeapi.BASE_URL}?limit=${limit}&offset=${offset}`)
      .then((res) => res.json());
    return response;
  }
}

export default Pokeapi;
