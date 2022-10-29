import {Typograph} from '@components/Typograph';

import * as Style from './styles';
import {useGetBooks} from '@services/useGetBooks';
import {FlashList} from '@shopify/flash-list';
import {BookItemProps} from '@services/useGetBooks/types';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {keyExtractor, renderItem} from '@modules/BookList/utils';
import {viewConfig} from '@modules/BookList/contants';
import {Dimensions} from 'react-native';
import {selectSetLoading, useLoading} from '@stores/useLoading';
import {Header} from '@components/Header';
import {useRoute} from '@react-navigation/native';
import {RouteParamsBookList} from '@modules/BookList/types';
import {useGetFavorites} from '@hooks/useGetFavorites';

const {height, width} = Dimensions.get('screen');

export const BookList = () => {
  const route = useRoute();

  const {searched_name, isFavorites} = route.params as RouteParamsBookList;
  const {data, isRefetching, fetchNextPage, isLoading} = useGetBooks(
    searched_name,
    isFavorites,
  );
  const {favorites} = useGetFavorites();

  const bookList = useMemo(
    () => (isFavorites ? favorites : data?.pages?.flat() || []),
    [data?.pages, favorites, isFavorites],
  );
  const flashListRef = useRef<FlashList<BookItemProps>>(null);
  const itemHeight = height;
  const setGlobalLoading = useLoading(selectSetLoading);

  useEffect(() => {
    setGlobalLoading(isRefetching || isLoading);
  }, [isLoading, isRefetching, setGlobalLoading]);

  const nextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);
  const estimatedListSize = useMemo(
    () => ({
      width,
      height: itemHeight * (bookList?.length ?? 1),
    }),
    [bookList?.length, itemHeight],
  );

  return (
    <Style.Container>
      <Header />
      <Style.Title>
        <Typograph variant="title">Lista de livros</Typograph>
      </Style.Title>
      <Style.List>
        <FlashList
          ref={flashListRef}
          data={bookList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          pagingEnabled
          onEndReachedThreshold={1}
          viewabilityConfig={viewConfig}
          refreshing={isRefetching}
          onEndReached={nextPage}
          decelerationRate="fast"
          disableIntervalMomentum
          estimatedItemSize={itemHeight}
          estimatedListSize={estimatedListSize}
        />
      </Style.List>
    </Style.Container>
  );
};
