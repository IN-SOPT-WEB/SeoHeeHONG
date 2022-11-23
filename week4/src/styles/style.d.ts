import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      h1: string;
      a: string;
      h3: string;
    };
    colors: {
      white: string;
      yellow: string;
      orange: string;
      purple: string;
      purple2: string;
      pink: string;
    };
  }
}
