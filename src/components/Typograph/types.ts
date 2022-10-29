import {ReactNode} from 'react';

export interface TypographProps {
  children: ReactNode;
  variant: 'title' | 'subtitle' | 'body1' | 'body2';
}

export type ReturnVariantStyled = {
  color: string;
  fontSize: number;
  fontWeight: number;
};
