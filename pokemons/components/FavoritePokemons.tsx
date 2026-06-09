"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export const FavoritePokemons = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    setPokemons(Object.values(favorites));
  }, []);

  if (pokemons.length === 0) return <NoFavorites />;
  return <PokemonGrid pokemons={pokemons} />;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
