import {Typograph} from '@components/Typograph';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useCallback, useMemo} from 'react';
import * as Styles from './styles';
import {useTheme} from 'styled-components';
import {useLikes} from '@stores/useLikes';
import {RenderBookProps} from '@components/Book/types';
import {useNavigation} from '@react-navigation/native';
import {selectSetDetail, useBookDetail} from '@stores/useBookDetail';

const mockImage =
  'https://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

export const Book = ({volumeInfo, id, ...rest}: RenderBookProps) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const setDetails = useBookDetail(selectSetDetail);
  // Mostrar exemplo com selectors e como eles afetam o render impedindo re-render desnecessarios
  const {likes, removeLike, setLike} = useLikes();

  const goToDetails = useCallback(() => {
    setDetails({
      ...rest,
      id: id,
      volumeInfo: volumeInfo,
    });
    navigation.navigate('details');
  }, [id, navigation, rest, setDetails, volumeInfo]);

  const verifyIfIsLiked = !!likes.length && likes.includes(id);
  const likedButton = useMemo(() => {
    return (
      <AntDesign
        name={verifyIfIsLiked ? 'heart' : 'hearto'}
        color={theme.colors.grey.WHITE}
        size={theme.FONT_SIZE.LG}
      />
    );
  }, [theme.FONT_SIZE.LG, theme.colors.grey.WHITE, verifyIfIsLiked]);

  const likeBook = useCallback(() => {
    if (verifyIfIsLiked) {
      removeLike(id);
    } else {
      setLike(id);
    }
  }, [id, removeLike, setLike, verifyIfIsLiked]);

  return (
    <Styles.Container onPress={goToDetails}>
      <Styles.CardContainer>
        <Styles.Image
          source={{
            uri: volumeInfo.imageLinks?.smallThumbnail ?? mockImage,
          }}
        />
        <Styles.Text>
          <Styles.ContainerTitle>
            <Typograph variant="body1">{volumeInfo.title}</Typograph>
          </Styles.ContainerTitle>
          <Styles.ContainerSubTitle>
            <Typograph variant="body2">{volumeInfo.publishedDate}</Typograph>
          </Styles.ContainerSubTitle>
        </Styles.Text>
      </Styles.CardContainer>
      <Styles.Like onPress={likeBook}>{likedButton}</Styles.Like>
    </Styles.Container>
  );
};
