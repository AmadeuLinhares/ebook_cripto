import {Typograph} from '@components/Typograph';
import {Card} from '@modules/Home/components/Cards';
import React, {useCallback, useMemo} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components/native';
import * as Styles from './styles';
import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
export const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const goToEbookList = useCallback(() => {
    navigation.navigate('search');
  }, [navigation]);

  const goToFavorites = useCallback(() => {
    navigation.navigate('booklist', {
      isFavorites: true,
      searched_name: '',
    });
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

  return (
    <Styles.Container>
      <Header />
      <Styles.ContainerTitle>
        <Typograph variant="title">E-Book</Typograph>
        <Typograph variant="subtitle">
          lores input dornes aqui mesmo unput dornes
        </Typograph>
      </Styles.ContainerTitle>
      <Styles.ContainerOptions>
        <Card icon={listIcon} onPress={goToEbookList} label="Lista de ebooks" />
        <Card
          icon={favoriteIcon}
          onPress={goToFavorites}
          label="Meus favoritos"
        />
      </Styles.ContainerOptions>
    </Styles.Container>
  );
};
