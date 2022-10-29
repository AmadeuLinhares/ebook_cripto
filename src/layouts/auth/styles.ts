import styled from 'styled-components/native';

export const AuthContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.grey.GRAY_600};
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.transparent};
`;
