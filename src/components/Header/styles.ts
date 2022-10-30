import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: ${({theme}) => theme.SPACINGS.spacing16};
  padding-right: ${({theme}) => theme.SPACINGS.spacing16};
  padding-top: ${({theme}) =>
    Platform.OS === 'ios'
      ? theme.SPACINGS.spacing16
      : theme.SPACINGS.spacing48};
  padding-bottom: ${({theme}) => theme.SPACINGS.spacing16};
`;
export const Container = styled.View`
  width: 100%;
`;
export const ContainerWithouthNavigation = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`;
export const ContainerWithNavigation = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NavigationButton = styled.Text``;
