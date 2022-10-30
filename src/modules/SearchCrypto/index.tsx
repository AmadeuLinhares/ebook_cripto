import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {Typograph} from '@components/Typograph';
import {useNavigation} from '@react-navigation/native';
import {useSearchCrypto} from '@services/useSearchCrypto';
import {
  useFavorites,
  selectSetFavorites,
  selectFavorites,
} from '@stores/useFavorites';
import Toast from 'react-native-toast-message';
import React, {useCallback, useMemo, useState} from 'react';
import {Platform} from 'react-native';
import * as Styles from './styles';

export const SearchCrypto = () => {
  const navigation = useNavigation();
  const addFavorite = useFavorites(selectSetFavorites);
  const favoriteList = useFavorites(selectFavorites);
  const [search, setSearch] = useState('');
  const [enableQuery, setEnableQuery] = useState(false);
  const [hasError, setHasError] = useState('');

  const {isFetching} = useSearchCrypto(search, {
    enabled: !!search && enableQuery,
    onSuccess: response => {
      if (response?.Asset && response.market_data) {
        const findIfItemAlreadyExist = favoriteList.findIndex(
          val => val.id === response?.Asset.id,
        );

        if (findIfItemAlreadyExist > -1) {
          Toast.show({
            text1: 'Upsss!!',
            text2: 'Item already exist in your favorite list',
            autoHide: true,
            type: 'error',
          });
          return;
        }
        Toast.show({
          text1: 'Great 🥰',
          text2: 'Crypto added into your favorite list',
          autoHide: true,
          type: 'success',
        });
        addFavorite({
          id: response?.Asset.id,
          name: response?.Asset.name,
          percent_change_usd_last_24_hours:
            response?.market_data.percent_change_usd_last_24_hours,
          price_usd: response?.market_data.price_usd,
          symbol: response?.Asset.symbol,
          slug: response?.Asset.slug,
        });
        navigation.navigate('favorits');
        setEnableQuery(false);
      }
    },
    onError: () => {
      Toast.show({
        text1: 'Error 🥺',
        text2: 'Crypto added into your favorite list',
        autoHide: true,
        type: 'error',
      });
      setEnableQuery(false);
    },
    onSettled: () => {
      setSearch('');
    },
  });

  const renderError = useMemo(() => {
    if (hasError) {
      return (
        <Styles.ContainerError>
          <Styles.TextHelper>{hasError}</Styles.TextHelper>
        </Styles.ContainerError>
      );
    }
  }, [hasError]);

  const onSearch = useCallback(() => {
    if (!search) {
      setHasError('Required file');
      return;
    }

    setEnableQuery(true);
  }, [search]);

  const onChange = useCallback(
    (e: string) => {
      setSearch(e);
      if (hasError) {
        setHasError('');
      }
    },
    [hasError],
  );

  return (
    <Styles.Container>
      <Header />
      <Styles.Search behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Styles.ContainerTitle>
          <Typograph variant="body2">
            Enter the name of the crypto you are looking for
          </Typograph>
        </Styles.ContainerTitle>
        <Styles.ContainerInput>
          <Styles.Input
            value={search}
            placeholder="Search your crypto"
            autoCapitalize={false}
            onChangeText={onChange}
          />
          {renderError}
        </Styles.ContainerInput>
        <Styles.ContainerButton>
          <Button
            onError
            helpText="teste error"
            variant="primary"
            onPress={onSearch}
            isLoading={isFetching}>
            Search
          </Button>
        </Styles.ContainerButton>
      </Styles.Search>
    </Styles.Container>
  );
};
