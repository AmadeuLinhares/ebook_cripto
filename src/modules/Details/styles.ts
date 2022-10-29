import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.grey.GRAY_600};
`;
export const DetailContainer = styled.View`
  background-color: ${({theme}) => theme.colors.grey.GRAY_700};
  padding-left: ${({theme}) => theme.SPACINGS.spacing24};
  padding-right: ${({theme}) => theme.SPACINGS.spacing24};
  padding-top: ${({theme}) => theme.SPACINGS.spacing24};
  padding-bottom: ${({theme}) => theme.SPACINGS.spacing24};
  margin-bottom: ${({theme}) => theme.SPACINGS.spacing24};
  border-radius: ${({theme}) => theme.RADII.medium};
`;
export const Title = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme}) => theme.SPACINGS.spacing12};
`;
export const Box = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({theme}) => theme.SPACINGS.spacing8};
`;
export const Label = styled.View``;
export const Value = styled.TouchableOpacity`
  margin-left: ${({theme}) => theme.SPACINGS.spacing4};
  max-width: 50%;
`;
export const ContainerButton = styled.View``;
