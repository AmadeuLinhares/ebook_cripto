import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {Typograph} from '@components/Typograph';
import {useNavigation} from '@react-navigation/native';
import {selectSetSearchKey, useSearchKey} from '@stores/useSearchKey';
import React, {useCallback, useMemo, useState} from 'react';
import * as Styles from './styles';

export const SearchEbook = () => {
  const navigation = useNavigation();
  const setKeyWord = useSearchKey(selectSetSearchKey);
  const [search, setSearch] = useState('');
  const [hasError, setHasError] = useState('');

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
      setHasError('Campo obrigatório ');
      return;
    }
    setKeyWord(search);
    navigation.navigate('booklist', {
      searched_name: search,
      isFavorites: false,
    });
  }, [navigation, search, setKeyWord]);

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
      <Styles.Search>
        <Styles.ContainerTitle>
          <Typograph variant="body2">
            Digite o nome ou termo do livro que procura
          </Typograph>
        </Styles.ContainerTitle>
        <Styles.ContainerInput>
          <Styles.Input
            value={search}
            placeholder="Pesquise seu livro"
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
            onPress={onSearch}>
            Pesquisar
          </Button>
        </Styles.ContainerButton>
      </Styles.Search>
    </Styles.Container>
  );
};
