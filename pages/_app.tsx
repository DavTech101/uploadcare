import '../styles/globals.css';
import Layout from '../components/Layout';
import GlobalStyles from '../components/GlobalStyles';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
