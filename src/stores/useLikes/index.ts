import create from 'zustand';

import {State} from './types';

export const useLikes = create<State>(set => ({
  likes: [],
  setLike: idLiked =>
    set(state => ({...state, likes: [...state.likes, idLiked]})),
  removeLike: idLiked =>
    set(state => ({...state, likes: state.likes.filter(id => id !== idLiked)})),
}));

export * from './selectors';
