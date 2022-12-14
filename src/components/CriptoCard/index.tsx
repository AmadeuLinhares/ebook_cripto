import {Typograph} from '@components/Typograph';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import React, {useCallback, useMemo} from 'react';
import * as Styles from './styles';
import {useTheme} from 'styled-components';
import {
  selectSetFavorites,
  useFavorites,
  selectFavorites,
  selectRemoveFavorites,
} from '@stores/useFavorites';
import {RenderCriptosProps} from '@components/CriptoCard/types';
import {formatUSD} from '@utils/formatters';

export const CriptoCard = ({
  id,
  name,
  slug,
  percent_change_usd_last_24_hours,
  price_usd,
  symbol,
}: RenderCriptosProps) => {
  const theme = useTheme();

  const addFavorite = useFavorites(selectSetFavorites);
  const removeFavorite = useFavorites(selectRemoveFavorites);
  const favoritesList = useFavorites(selectFavorites);

  const verifyIfIsLiked =
    !!favoritesList.length &&
    !!favoritesList.filter(val => val.id === id).length;
  const likedButton = useMemo(() => {
    return (
      <AntDesign
        name={verifyIfIsLiked ? 'heart' : 'hearto'}
        color={theme.colors.grey.WHITE}
        size={theme.FONT_SIZE.LG}
      />
    );
  }, [theme.FONT_SIZE.LG, theme.colors.grey.WHITE, verifyIfIsLiked]);

  const favoriteCripto = useCallback(() => {
    if (verifyIfIsLiked) {
      removeFavorite(id);
    } else {
      addFavorite({
        id: id,
        name: name,
        percent_change_usd_last_24_hours: percent_change_usd_last_24_hours,
        price_usd: price_usd,
        symbol: symbol,
        slug,
      });
    }
  }, [
    addFavorite,
    id,
    name,
    percent_change_usd_last_24_hours,
    price_usd,
    removeFavorite,
    slug,
    symbol,
    verifyIfIsLiked,
  ]);

  const renderQuotation = useMemo(() => {
    return (
      <Feather
        name={
          percent_change_usd_last_24_hours > 0
            ? 'arrow-up-right'
            : 'arrow-down-left'
        }
        color={
          percent_change_usd_last_24_hours > 0
            ? theme.colors.green.GREEN_700
            : theme.colors.red.RED_DARK
        }
        size={theme.FONT_SIZE.MD}
      />
    );
  }, [
    percent_change_usd_last_24_hours,
    theme.FONT_SIZE.MD,
    theme.colors.green.GREEN_700,
    theme.colors.red.RED_DARK,
  ]);
  const LogoIcon = useMemo(() => {
    return (
      <Foundation
        name={'bitcoin-circle'}
        color={theme.colors.grey.WHITE}
        size={theme.FONT_SIZE.XXXL}
      />
    );
  }, [theme.FONT_SIZE.XXXL, theme.colors.grey.WHITE]);

  return (
    <Styles.Container>
      <Styles.CardContainer>
        <Styles.ContainerWithImg>
          <Styles.Logo>{LogoIcon}</Styles.Logo>
          <Styles.Text>
            <Styles.ContainerTitle>
              <Typograph variant="body1">{symbol}</Typograph>
            </Styles.ContainerTitle>
            <Styles.ContainerSubTitle>
              <Typograph variant="body2">{name}</Typograph>
            </Styles.ContainerSubTitle>
          </Styles.Text>
        </Styles.ContainerWithImg>
        <Styles.ContainerValues>
          <Styles.Prices>
            <Typograph variant="body2">{formatUSD(price_usd)}</Typograph>
          </Styles.Prices>
          <Styles.Quotation>
            {renderQuotation}
            <Styles.QuotationValue
              variant="body2"
              isPositive={percent_change_usd_last_24_hours > 0}>
              {percent_change_usd_last_24_hours?.toFixed(3)}
            </Styles.QuotationValue>
          </Styles.Quotation>
        </Styles.ContainerValues>
      </Styles.CardContainer>
      <Styles.Like onPress={favoriteCripto}>{likedButton}</Styles.Like>
    </Styles.Container>
  );
};
