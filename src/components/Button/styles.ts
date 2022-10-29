import {ButtonProps} from '@components/Button/types';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;
export const CustomButton = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  background-color: ${({theme, variant}) =>
    variant === 'primary'
      ? theme.colors.green.GREEN_700
      : theme.colors.red.RED_DARK};

  border-radius: ${({theme}) => theme.RADII.medium};
  padding-left: ${({theme}) => theme.SPACINGS.spacing16};
  padding-right: ${({theme}) => theme.SPACINGS.spacing16};
  padding-top: ${({theme}) => theme.SPACINGS.spacing16};
  padding-bottom: ${({theme}) => theme.SPACINGS.spacing16};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.grey.WHITE};
  font-weight: ${({theme}) => theme.FONT_WEIGHTS.bold};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  text-transform: capitalize;
`;
