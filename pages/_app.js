import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles/base';
import Cursor from 'components/Common/Cursor';
import 'styles/modules/grid.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
