import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

// la fn next es importante para poder continuar con el flujo
export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);
        if (action.type === 'pokemons/toggleFavorite') {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons.favorites));
            return;
        }

    }
}