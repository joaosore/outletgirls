import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: {
        main: string;
        secondary: string;
        contrast: string;
      };
      background: {
        main: string;
        secondary: string;
        button: string;
        border: string;
      };
      table: {
        th: string;
        td: string;
      };
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
