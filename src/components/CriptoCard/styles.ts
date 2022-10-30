import styled from 'styled-components/native';
import {Typograph} from '@components/Typograph';
import {QuotationProgress} from '@components/CriptoCard/types';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.grey.GRAY_500};
  border-radius: ${({theme}) => theme.RADII.medium};
  padding-left: ${({theme}) => theme.SPACINGS.spacing24};
  padding-right: ${({theme}) => theme.SPACINGS.spacing24};
  padding-top: ${({theme}) => theme.SPACINGS.spacing16};
  padding-bottom: ${({theme}) => theme.SPACINGS.spacing16};
  margin-top: ${({theme}) => theme.SPACINGS.spacing8};
  margin-bottom: ${({theme}) => theme.SPACINGS.spacing8};
  flex-direction: row;
  justify-content: space-between;
`;
export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
export const Image = styled.Image`
  margin-right: ${({theme}) => theme.SPACINGS.spacing12};
  width: 50;
  height: 50;
  border-radius: ${({theme}) => theme.RADII.medium};
`;
export const Text = styled.View``;
export const ContainerTitle = styled.View``;
export const ContainerSubTitle = styled.View`
  margin-top: ${({theme}) => theme.SPACINGS.spacing12};
`;
export const Like = styled.TouchableOpacity`
  margin-left: ${({theme}) => theme.SPACINGS.spacing12};
`;
export const ContainerValues = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Prices = styled.View`
  justify-content: flex-start;
`;
export const Quotation = styled.View`
  margin-top: ${({theme}) => theme.SPACINGS.spacing12};
  flex-direction: row;
`;

export const QuotationValue = styled(Typograph)<QuotationProgress>`
  color: ${({theme, isPositive}) =>
    isPositive ? theme.colors.green.GREEN_700 : theme.colors.red.RED_DARK};
  font-weight: ${({theme}) => theme.FONT_WEIGHTS.bold};
`;

export const ContainerWithImg = styled.View`
  flex-direction: row;
`;
