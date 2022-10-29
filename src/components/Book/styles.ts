import styled from 'styled-components/native';

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
`;
export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Image = styled.Image`
  margin-right: ${({theme}) => theme.SPACINGS.spacing12};
  width: 50;
  height: 50;
  border-radius: ${({theme}) => theme.RADII.medium};
`;
export const Text = styled.View`
  width: 75%;
`;
export const ContainerTitle = styled.View``;
export const ContainerSubTitle = styled.View`
  margin-top: ${({theme}) => theme.SPACINGS.spacing12};
`;
export const Like = styled.TouchableOpacity`
  margin-left: ${({theme}) => theme.SPACINGS.spacing12};
`;
