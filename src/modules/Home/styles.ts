import styled from 'styled-components/native';
import {Typograph} from '@components/Typograph';
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.grey.GRAY_600};
`;
export const ContainerTitle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.transparent};
`;
export const ContainerOptions = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.transparent};
  flex-wrap: wrap;
  width: 100%;
`;

export const Description = styled(Typograph)`
  text-align: center;
  margin-top: ${({theme}) => theme.SPACINGS.spacing12};
`;
