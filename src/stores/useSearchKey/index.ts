import create from 'zustand';

import {State} from './types';

export const useSearchKey = create<State>(set => ({
  searchKey: '',
  setSearchedKey: word => set(state => ({...state, searchKey: word})),
}));

export * from './selectors';
