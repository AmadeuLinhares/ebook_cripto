import {ButtonProps} from '@components/Button/types';

import * as Styles from './styles';

export const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <Styles.Container>
      <Styles.CustomButton {...rest}>
        <Styles.ButtonText>{children}</Styles.ButtonText>
      </Styles.CustomButton>
    </Styles.Container>
  );
};
