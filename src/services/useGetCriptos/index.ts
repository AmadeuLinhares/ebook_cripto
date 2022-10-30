import {api} from '@api/index';
import {parseResponseData} from '@api/parseResponse';
import {pageSize} from '@services/useGetCriptos/constants';
import {createUseGetCriptosKey} from '@services/useGetCriptos/keys';
import {CriptoList} from '@services/useGetCriptos/types';
import {useInfiniteQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

export function useGetCriptos() {
  return useInfiniteQuery<CriptoList[], AxiosError<Error>>(
    createUseGetCriptosKey(),
    ({pageParam = 1}) =>
      api
        .get<CriptoList[]>(`/v2/assets?page=${pageParam}&limit=${pageSize}`)
        .then(parseResponseData),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length >= pageSize ? allPages.length + 1 : undefined;
      },
      enabled: true,
    },
  );
}
