import {CriptoCard} from '@components/CriptoCard';
import type {ListRenderItemInfo} from '@shopify/flash-list';
import {InfiniteData} from '@tanstack/react-query';
import {CriptoList} from '@services/useGetCriptos/types';

export function keyExtractor(item: CriptoList) {
  return item.id;
}

export function renderItem({item}: ListRenderItemInfo<CriptoList>) {
  return (
    <CriptoCard
      key={item.id}
      id={item.id}
      name={item.name}
      percent_change_usd_last_24_hours={
        item.metrics.market_data.percent_change_usd_last_24_hours
      }
      price_usd={item.metrics.market_data.price_usd}
      slug={item.slug}
      symbol={item.slug}
    />
  );
}

export const getFavoritesBooks = (
  data: InfiniteData<CriptoList[]> | undefined,
) => {
  return data;
};
