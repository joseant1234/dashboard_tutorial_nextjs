import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // se maneja en el error.tsx
  // throw new Error('Error en el servidor')

  return pokemons;
}

// next maneja esto para el cliente como si fuera sincrono
export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
      <PokemonGrid pokemons={ pokemons } />

    </div>
  );
}