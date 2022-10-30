import create from 'zustand';

import {State} from './types';

export const useFavorites = create<State>(set => ({
  favorites: [],
  setFavorites: newFavorite =>
    set(state => ({...state, favorites: [...state.favorites, newFavorite]})),
  removeFavorites: favoriteId =>
    set(state => ({
      ...state,
      favorites: state.favorites.filter(favorite => favorite.id !== favoriteId),
    })),
}));

export * from './selectors';
