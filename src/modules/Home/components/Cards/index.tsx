import {Typograph} from '@components/Typograph';
import * as Styles from './styles';

import {CardProps} from '@modules/Home/components/Cards/types';
export const Card = ({label, onPress, icon}: CardProps) => {
  return (
    <Styles.Container onPress={onPress}>
      <Styles.CardContainer>
        <Styles.Icon>{icon}</Styles.Icon>
        <Styles.Text>
          <Typograph variant="body1">{label}</Typograph>
        </Styles.Text>
      </Styles.CardContainer>
    </Styles.Container>
  );
};
