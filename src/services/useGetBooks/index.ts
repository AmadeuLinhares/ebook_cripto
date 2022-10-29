import {api} from '@api/index';
import {parseResponseData} from '@api/parseResponse';
import {pageSize} from '@services/useGetBooks/constants';
import {createUseGetAttributesKey} from '@services/useGetBooks/keys';
import {BookItemProps} from '@services/useGetBooks/types';
import {useInfiniteQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

export function useGetBooks(search: string, isFavorite: boolean) {
  const googleKey = 'AIzaSyDle4Yb5fAjQOc-K3I8_IWbPk3rj7GKOVs';
  return useInfiniteQuery<BookItemProps[], AxiosError<Error>>(
    createUseGetAttributesKey(search ?? ''),
    ({pageParam = 1}) =>
      api
        .get<Array<BookItemProps>>(
          `/volumes?q=${search}&key=${googleKey}&startIndex=${pageParam}&maxResults=${pageSize}`,
        )
        .then(parseResponseData),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length >= pageSize ? allPages.length + 1 : undefined;
      },
      enabled: !!search && !isFavorite,
    },
  );
}
