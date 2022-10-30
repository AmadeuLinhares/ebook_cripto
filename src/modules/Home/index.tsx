import {Typograph} from '@components/Typograph';
import {Card} from '@modules/Home/components/Cards';
import React, {useCallback, useMemo} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components/native';
import * as Styles from './styles';
import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
export const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const goToEbookList = useCallback(() => {
    navigation.navigate('explore');
  }, [navigation]);

  const goToFavorites = useCallback(() => {
    navigation.navigate('favorits');
  }, [navigation]);

  const goToSearchCrypto = useCallback(() => {
    navigation.navigate('search');
  }, [navigation]);

  const listIcon = useMemo(() => {
    return (
      <MaterialIcons
        name="library-books"
        color={theme.colors.grey.WHITE}
        size={theme.FONT_SIZE.MD}
      />
    );
  }, [theme.FONT_SIZE.MD, theme.colors.grey.WHITE]);

  const favoriteIcon = useMemo(() => {
    return (
      <AntDesign
        name="heart"
        color={theme.colors.grey.WHITE}
        size={theme.FONT_SIZE.MD}
      />
    );
  }, [theme.FONT_SIZE.MD, theme.colors.grey.WHITE]);
  const cryptoIcon = useMemo(() => {
    return (
      <Feather
        name="search"
        color={theme.colors.grey.WHITE}
        size={theme.FONT_SIZE.MD}
      />
    );
  }, [theme.FONT_SIZE.MD, theme.colors.grey.WHITE]);

  return (
    <Styles.Container>
      <Header />
      <Styles.ContainerTitle>
        <Typograph variant="title">Crypto E-Book</Typograph>

        <Styles.Description variant="subtitle">
          This application you can search about cryptos, add in favorite list
          and see more details
        </Styles.Description>
      </Styles.ContainerTitle>
      <Styles.ContainerOptions>
        <Card icon={listIcon} onPress={goToEbookList} label="Explore" />
        <Card icon={favoriteIcon} onPress={goToFavorites} label="My Favorits" />
        <Card
          icon={cryptoIcon}
          onPress={goToSearchCrypto}
          label="Search especific crypto"
        />
      </Styles.ContainerOptions>
    </Styles.Container>
  );
};
