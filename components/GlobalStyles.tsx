import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

//######### Component Styles #################

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
`;

//######### Component #################

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
