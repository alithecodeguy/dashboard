// styles
import '@/styles/main.css';

// libraries
import { App } from 'antd';
import Head from 'next/head';
import { Provider } from 'react-redux';

// components
import PrimaryLayout from '../components/layout/PrimaryLayout';
import ThemeProvider from '../components/providers/ThemeProvider';

// redux
import { store } from '../libs/redux/store';

export default function GiftCardApp({ Component, pageProps }) {
  return (
    <App
      style={{
        height: '100dvh',
        width: '100dvw',
        maxHeight: '100dvh',
        maxWidth: '100dvw',
        overflow: 'hidden'
      }}
    >
      <Head>
        <title>{pageProps?.pageTitle || 'Digimenue'}</title>
        <link rel="icon" href="/assets/images/png/favicon.png" />
      </Head>

      <Provider store={store}>
        <ThemeProvider>
          <PrimaryLayout pageHasLayout={pageProps?.hasLayout}>
            <Component {...pageProps} />
          </PrimaryLayout>
        </ThemeProvider>
      </Provider>
    </App>
  );
}
