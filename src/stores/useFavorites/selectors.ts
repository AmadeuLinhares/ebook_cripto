import type {State} from './types';

export const selectSetFavorites = (state: State) => state.setFavorites;
export const selectRemoveFavorites = (state: State) => state.removeFavorites;
export const selectFavorites = (state: State) => state.favorites;
