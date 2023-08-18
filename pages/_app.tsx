// init your App.js
import './index.css';
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy';
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head';
import { githubTheme } from '../config/themeConfig';

function App({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <CssVarsProvider theme={githubTheme}>
      <Component {...pageProps} />
    </CssVarsProvider>
  </SessionProvider>;
}

export default App;