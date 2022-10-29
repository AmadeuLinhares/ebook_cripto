import type {State} from './types';

export const selectSetSearchKey = (state: State) => state.setSearchedKey;
export const selectSearchKey = (state: State) => state.searchKey;
