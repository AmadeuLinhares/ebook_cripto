import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.grey.GRAY_500};
  border-radius: ${({theme}) => theme.RADII.medium};
  padding-left: ${({theme}) => theme.SPACINGS.spacing24};
  padding-right: ${({theme}) => theme.SPACINGS.spacing24};
  padding-top: ${({theme}) => theme.SPACINGS.spacing24};
  padding-bottom: ${({theme}) => theme.SPACINGS.spacing24};
  margin-top: ${({theme}) => theme.SPACINGS.spacing8};
  margin-bottom: ${({theme}) => theme.SPACINGS.spacing8};
  flex-direction: row;
  width: 80%;
`;
export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.View`
  margin-right: ${({theme}) => theme.SPACINGS.spacing12};
`;
export const Text = styled.View``;
