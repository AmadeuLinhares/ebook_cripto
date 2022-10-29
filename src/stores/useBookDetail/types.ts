import {BookItemProps} from '@services/useGetBooks/types';

export type State = {
  detail: BookItemProps;
  setDetail(data: BookItemProps): void;
};
