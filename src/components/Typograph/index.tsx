import {Container, Value} from './styles';
import {TypographProps} from './types';

export const Typograph = ({children, variant, ...rest}: TypographProps) => {
  return (
    <Container>
      <Value variant={variant} {...rest}>
        {children}
      </Value>
      {/* <Value numberOfLines={1} ellipsizeMode="tail" variant={variant} {...rest}>
        {children}
      </Value> */}
    </Container>
  );
};
