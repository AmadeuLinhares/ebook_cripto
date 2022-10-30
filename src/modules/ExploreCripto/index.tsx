import {Typograph} from '@components/Typograph';
import {Header} from '@components/Header';
import {FlashList} from '@shopify/flash-list';
import * as Style from './styles';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {CriptoList} from '@services/useGetCriptos/types';
import {useGetCriptos} from '@services/useGetCriptos';
import {selectSetLoading, useLoading} from '@stores/useLoading';
import {keyExtractor, renderItem} from '@modules/ExploreCripto/utils';
import {viewConfig} from '@modules/ExploreCripto/contants';
import {Dimensions} from 'react-native';
export const ExploreCriptos = () => {
  const {height, width} = Dimensions.get('screen');
  const flashListRef = useRef<FlashList<CriptoList>>(null);

  const {data, isRefetching, fetchNextPage, isLoading} = useGetCriptos();

  const criptoList = useMemo(() => data?.pages?.flat() || [], [data?.pages]);

  const setGlobalLoading = useLoading(selectSetLoading);
  console.log('=====>', data);
  useEffect(() => {
    setGlobalLoading(isRefetching || isLoading);
  }, [isLoading, isRefetching, setGlobalLoading]);

  const nextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const estimatedListSize = useMemo(
    () => ({
      width,
      height: height * (criptoList?.length ?? 1),
    }),
    [criptoList?.length, height, width],
  );
  return (
    <Style.Container>
      <Header />
      <Style.Title>
        <Typograph variant="title">Cripto List</Typograph>
      </Style.Title>
      <Style.List>
        <FlashList
          ref={flashListRef}
          data={criptoList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          pagingEnabled
          onEndReachedThreshold={1}
          viewabilityConfig={viewConfig}
          refreshing={isRefetching}
          onEndReached={nextPage}
          decelerationRate="fast"
          disableIntervalMomentum
          estimatedItemSize={height}
          estimatedListSize={estimatedListSize}
        />
      </Style.List>
    </Style.Container>
  );
};
