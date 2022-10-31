import {ButtonProps} from '@components/Button/types';
import {useMemo} from 'react';

import * as Styles from './styles';

export const Button = ({children, isLoading, ...rest}: ButtonProps) => {
  const renderContent = useMemo(() => {
    if (isLoading) {
      return <Styles.Loading />;
    }
    return <Styles.ButtonText>{children}</Styles.ButtonText>;
  }, [children, isLoading]);

  return (
    <Styles.Container>
      <Styles.CustomButton {...rest}>{renderContent}</Styles.CustomButton>
    </Styles.Container>
  );
};
