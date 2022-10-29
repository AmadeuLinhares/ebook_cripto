import CustomTheme from '@theme/index';

type Theme = typeof CustomTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
