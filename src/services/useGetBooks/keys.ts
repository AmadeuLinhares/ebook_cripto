import {QueryKey} from '@tanstack/react-query';

export const createUseGetAttributesKey = (search?: string): QueryKey => [
  'googlebooks',
  search,
];
