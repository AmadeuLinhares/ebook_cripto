import {useCallback, useMemo} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import * as Styles from './styles';
import {useTheme} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const Logo = useMemo(() => {
    return (
      <EntypoIcon
        name="open-book"
        color={theme.colors.grey.GRAY_100}
        size={theme.FONT_SIZE.XL}
      />
    );
  }, [theme.FONT_SIZE.XL, theme.colors.grey.GRAY_100]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderComponents = useMemo(() => {
    if (navigation.canGoBack()) {
      return (
        <Styles.ContainerWithNavigation>
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons
              name="keyboard-arrow-left"
              color={theme.colors.grey.WHITE}
              size={theme.FONT_SIZE.XL}
            />
          </TouchableOpacity>
          {Logo}
        </Styles.ContainerWithNavigation>
      );
    }
    return (
      <Styles.ContainerWithouthNavigation>
        {Logo}
      </Styles.ContainerWithouthNavigation>
    );
  }, [Logo, goBack, navigation, theme.FONT_SIZE.XL, theme.colors.grey.WHITE]);

  return (
    <Styles.ContainerHeader>
      <Styles.Container>{renderComponents}</Styles.Container>
    </Styles.ContainerHeader>
  );
};
