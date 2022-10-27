import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header: string;
      score: string;
      li: string;
    };
    colors: {
      white: string;
      mainColor: string;
      subColor: string;
      button: string;
    };
  }
}
