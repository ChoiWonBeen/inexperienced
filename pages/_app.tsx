import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import SEO from '../components/SEO'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <SEO/>
      <Header/>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
