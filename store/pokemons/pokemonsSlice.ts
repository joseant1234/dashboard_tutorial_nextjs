import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


/*
  {
    favorites: {
      '1': { id: 1, name: 'bulbasaur' },
      '2': { id: 2, name: 'bulbasaur' },
      '3': { id: 3, name: 'bulbasaur' },
    }
  }
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   // if (typeof localStorage === 'undefined') { return {}; } // para solventar de forma rapida el proceso de hacer build de la app, porque en el server no hay window
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites;
// }

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const { id } = pokemon;

        if (!!state.favorites[id]) {
            delete state.favorites[id];
        } else {
            state.favorites[id] = pokemon;
        }
        // localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer