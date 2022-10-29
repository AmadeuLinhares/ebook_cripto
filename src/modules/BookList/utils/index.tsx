import {BookItemProps} from '@services/useGetBooks/types';
import {Book} from '@components/Book';
import type {ListRenderItemInfo} from '@shopify/flash-list';
import {InfiniteData} from '@tanstack/react-query';

export function keyExtractor(item: BookItemProps) {
  return item.id;
}

export function renderItem({item}: ListRenderItemInfo<BookItemProps>) {
  return <Book key={item.id} {...item} />;
}

export const getFavoritesBooks = (
  data: InfiniteData<BookItemProps[]> | undefined,
) => {
  return data;
};
