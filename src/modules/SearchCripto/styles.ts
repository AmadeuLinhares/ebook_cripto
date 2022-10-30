import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.grey.GRAY_600};
`;
export const Search = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: ${({theme}) => theme.SPACINGS.spacing32};
`;

export const ContainerInput = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme}) => theme.SPACINGS.spacing16};
`;
export const Input = styled.TextInput.attrs<TextInputProps>(
  ({theme, ...rest}) => ({
    placeholderTextColor: theme.colors.grey.GRAY_300,
    ...rest,
  }),
)`
  width: 80%;
  height: 50;
  background-color: ${({theme}) => theme.colors.grey.GRAY_700};
  border-radius: ${({theme}) => theme.RADII.medium};
  padding-left: ${({theme}) => theme.SPACINGS.spacing12};
  color: ${({theme}) => theme.colors.grey.WHITE};
`;
export const ContainerButton = styled.View`
  width: 80%;
`;

export const ContainerError = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${({theme}) => theme.SPACINGS.spacing12};
  padding-top: ${({theme}) => theme.SPACINGS.spacing4};
`;
export const TextHelper = styled.Text`
  color: ${({theme}) => theme.colors.red.RED};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-weight: ${({theme}) => theme.FONT_WEIGHTS.regular};
  text-transform: capitalize;
`;
