import {VolumeInfoProps} from '@services/useGetBooks/types';
import create from 'zustand';

import {State} from './types';

export const useBookDetail = create<State>(set => ({
  detail: {
    id: '',
    volumeInfo: {} as VolumeInfoProps,
  },
  setDetail: data => set(state => ({...state, detail: data})),
}));

export * from './selectors';
