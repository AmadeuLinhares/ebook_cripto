import type {State} from './types';

export const selectSetLike = (state: State) => state.setLike;
export const selectRemoveLike = (state: State) => state.removeLike;
export const selectLike = (state: State) => state.likes;
