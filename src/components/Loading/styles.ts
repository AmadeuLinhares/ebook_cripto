import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  z-index: 9;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.grey.GRAY_700};
  opacity: 0.5;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.grey.WHITE,
}))``;
