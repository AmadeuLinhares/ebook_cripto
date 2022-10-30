import {api} from '@api/index';
import {parseResponseData} from '@api/parseResponse';

import {createUseGetSearchCryptoByNameKey} from '@services/useSearchCrypto/keys';
import {GetCryptoByName} from '@services/useSearchCrypto/types';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';

export function useSearchCrypto(
  keyWord: string,
  options?: UseQueryOptions<GetCryptoByName>,
) {
  return useQuery<GetCryptoByName>(
    createUseGetSearchCryptoByNameKey(keyWord),
    () =>
      api
        .get<GetCryptoByName>(`/v1/assets/${keyWord}/metrics/market-data`)
        .then(parseResponseData),
    options,
  );
}
