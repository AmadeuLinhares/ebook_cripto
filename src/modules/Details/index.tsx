import {Button} from '@components/Button';
import {Typograph} from '@components/Typograph';
import {useNavigation} from '@react-navigation/native';
import {selectBookDetail, useBookDetail} from '@stores/useBookDetail';
import {Linking} from 'react-native';
import * as Styles from './styles';

export const Detail = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const detail = useBookDetail(selectBookDetail);
  const openLink = async (value: string) => {
    await Linking.openURL(value);
  };

  return (
    !!detail?.id && (
      <Styles.Container>
        <Styles.DetailContainer>
          <Styles.Title>
            <Typograph variant="title">{detail?.volumeInfo?.title}</Typograph>
            <Typograph variant="subtitle">
              {detail?.volumeInfo?.authors.toString()}
            </Typograph>
          </Styles.Title>

          <Styles.Box>
            <Styles.Label>
              <Typograph variant="body1">publisher:</Typograph>
            </Styles.Label>
            <Styles.Value>
              <Typograph variant="subtitle">
                {detail?.volumeInfo?.publisher}
              </Typograph>
            </Styles.Value>
          </Styles.Box>
          <Styles.Box>
            <Styles.Label>
              <Typograph variant="body1">publishedDate:</Typograph>
            </Styles.Label>
            <Styles.Value>
              <Typograph variant="subtitle">
                {detail?.volumeInfo?.publishedDate}
              </Typograph>
            </Styles.Value>
          </Styles.Box>
          <Styles.Box>
            <Styles.Label>
              <Typograph variant="body1">pageCount:</Typograph>
            </Styles.Label>
            <Styles.Value>
              <Typograph variant="subtitle">
                {detail?.volumeInfo?.pageCount}
              </Typograph>
            </Styles.Value>
          </Styles.Box>
          <Styles.Box>
            <Styles.Label>
              <Typograph variant="body1">previewLink:</Typograph>
            </Styles.Label>
            <Styles.Value
              onPress={() => openLink(detail?.volumeInfo?.previewLink)}>
              <Typograph variant="subtitle">
                {detail?.volumeInfo?.previewLink}
              </Typograph>
            </Styles.Value>
          </Styles.Box>
        </Styles.DetailContainer>
        <Styles.ContainerButton>
          <Button onPress={goBack} variant="secondary">
            Voltar
          </Button>
        </Styles.ContainerButton>
      </Styles.Container>
    )
  );
};
