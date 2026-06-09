"use client";
import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";

interface Props {
  children: React.ReactNode;
}

// el Provider de redux necesita ejecutarse en la parte del cliente (use client)
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}",
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
