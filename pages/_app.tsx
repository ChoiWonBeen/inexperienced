import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

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
