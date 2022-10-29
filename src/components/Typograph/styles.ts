import {ReturnVariantStyled, TypographProps} from '@components/Typograph/types';
import styled from 'styled-components/native';
import theme from '@theme/index';
export const Container = styled.View``;
const handleColorType = (
  type: 'title' | 'subtitle' | 'body1' | 'body2',
  themeProps: typeof theme,
): ReturnVariantStyled => {
  switch (type) {
    case 'title':
      return {
        color: themeProps.colors.grey.WHITE,
        fontSize: themeProps.FONT_SIZE.XL,
        fontWeight: themeProps.FONT_WEIGHTS.bold,
      };
    case 'subtitle':
      return {
        color: themeProps.colors.grey.GRAY_300,
        fontSize: themeProps.FONT_SIZE.MD,
        fontWeight: themeProps.FONT_WEIGHTS.regular,
      };
    case 'body1':
      return {
        color: themeProps.colors.grey.GRAY_100,
        fontSize: themeProps.FONT_SIZE.MD,
        fontWeight: themeProps.FONT_WEIGHTS.regular,
      };
    case 'body2':
      return {
        color: themeProps.colors.grey.GRAY_200,
        fontSize: themeProps.FONT_SIZE.SM,
        fontWeight: themeProps.FONT_WEIGHTS.regular,
      };
    default:
      return {
        color: themeProps.colors.grey.GRAY_200,
        fontSize: themeProps.FONT_SIZE.MD,
        fontWeight: themeProps.FONT_WEIGHTS.regular,
      };
  }
};
export const Value = styled.Text<Pick<TypographProps, 'variant'>>`
  color: ${props => handleColorType(props.variant, props.theme).color};
  font-size: ${props => handleColorType(props.variant, props.theme).fontSize};
  font-weight: ${props =>
    handleColorType(props.variant, props.theme).fontWeight};
`;
