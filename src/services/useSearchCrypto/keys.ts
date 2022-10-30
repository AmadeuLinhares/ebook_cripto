import {QueryKey} from '@tanstack/react-query';

export const createUseGetSearchCryptoByNameKey = (
  keyWord: string,
): QueryKey => ['searchCryptoByName', keyWord];
