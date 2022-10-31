import * as Style from './styles';
import {Typograph} from '@components/Typograph';
import {Header} from '@components/Header';
import {useFavorites, selectFavorites} from '@stores/useFavorites';
import {useMemo} from 'react';
import {CriptoCard} from '@components/CriptoCard';
export const Favorits = () => {
  const favoritesData = useFavorites(selectFavorites);

  const renderFavorites = useMemo(() => {
    if (favoritesData.length) {
      return favoritesData.map(data => (
        <CriptoCard
          id={data.id}
          name={data.name}
          symbol={data.symbol}
          percent_change_usd_last_24_hours={
            data.percent_change_usd_last_24_hours
          }
          price_usd={data.price_usd}
          slug={data.slug}
        />
      ));
    }

    return (
      <Style.ContainerEmptyState>
        <Typograph variant="subtitle">
          You don't have favorite yet :({' '}
        </Typograph>
      </Style.ContainerEmptyState>
    );
  }, [favoritesData]);

  return (
    <Style.Container>
      <Header />
      <Style.Title>
        <Typograph variant="title">Favorits</Typograph>
      </Style.Title>
      <Style.List>{renderFavorites}</Style.List>
    </Style.Container>
  );
};
