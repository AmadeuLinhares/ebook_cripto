import {ReactNode} from 'react';

export type CardProps = {
  label: string;
  onPress(): void;
  icon: ReactNode;
};
