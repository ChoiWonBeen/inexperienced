import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import SEO from '../components/shared/SEO';
import Header from '../components/shared/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../static/theme.ts';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
    font-family: "Noto Sans KR";
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SEO/>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
