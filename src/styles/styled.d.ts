import "styled-components";
interface IPalette {
  Primary: string;
  Grey400: string;
  DarkText: string;
  GhostWhite: string;
  Blue100: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    colors: IPalette;
  }
}
