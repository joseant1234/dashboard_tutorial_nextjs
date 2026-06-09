import { configureStore, Middleware } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageMiddleware } from './middlewares/localstorage-middleware';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// permite hacer dispatch de acciones
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// escuchar y leer el store
export const useAppSelector = useSelector.withTypes<RootState>()