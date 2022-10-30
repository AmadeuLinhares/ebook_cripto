import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.grey.GRAY_600};
  padding-left: ${({theme}) => theme.SPACINGS.spacing12};
  padding-right: ${({theme}) => theme.SPACINGS.spacing12};
`;
export const Title = styled.View`
  justify-content: center;
  align-items: center;
`;
export const List = styled.ScrollView`
  flex: 1;
  margin-top: ${({theme}) => theme.SPACINGS.spacing16};
`;

export const ContainerEmptyState = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({theme}) => theme.SPACINGS.spacing16};
`;
