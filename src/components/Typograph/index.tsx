import {Container, Value} from './styles';
import {TypographProps} from './types';

export const Typograph = ({children, variant}: TypographProps) => {
  return (
    <Container>
      <Value numberOfLines={1} ellipsizeMode="tail" variant={variant}>
        {children}
      </Value>
    </Container>
  );
};
