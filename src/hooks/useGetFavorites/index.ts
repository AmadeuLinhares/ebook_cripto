import {createUseGetAttributesKey} from '@services/useGetBooks/keys';
import {BookItemProps} from '@services/useGetBooks/types';
import {selectLike, useLikes} from '@stores/useLikes';
import {selectSearchKey, useSearchKey} from '@stores/useSearchKey';
import {InfiniteData, useQueryClient} from '@tanstack/react-query';

export const useGetFavorites = () => {
  const likes = useLikes(selectLike);
  const wordKey = useSearchKey(selectSearchKey);
  const useQuery = useQueryClient();
  const getDataByCache = useQuery.getQueryData<InfiniteData<BookItemProps[]>>(
    createUseGetAttributesKey(wordKey),
  );

  const booksLiked: BookItemProps[] = [];

  getDataByCache?.pages.map(pages =>
    pages.map(list => {
      if (likes.includes(list.id)) {
        booksLiked.push(list);
      }
    }),
  );

  return {
    favorites: booksLiked,
  };
};
