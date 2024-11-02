// styles
import '@/styles/main.css';

// libraries
import { App } from 'antd';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

// components
import PrimaryLayout from '../components/layout/PrimaryLayout';
import ThemeProvider from '../components/providers/ThemeProvider';

// redux
import { store } from '../libs/redux/store';
import { useEffect, useState } from 'react';
import PageLoader from '../components/layout/PageLoader.tsx';

export default function GiftCardApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <App
      style={{
        height: '100dvh',
        width: '100dvw',
        maxHeight: '100dvh',
        maxWidth: '100dvw',
        overflow: 'auto'
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
