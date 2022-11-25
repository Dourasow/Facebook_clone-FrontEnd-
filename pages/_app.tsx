import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import store from '../public/src/app/Store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>

  )
}
