import '@/styles/globals.scss'
import 'antd/dist/reset.css'
import 'normalize.css'
import { Provider } from 'react-redux'
import Layout from '@/components/layout'
import wrapper from '@/store'

import type { AppProps } from 'next/app'

export default function App({ Component, ...rest }: AppProps) {
  // redux接入
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...rest.pageProps} />
      </Layout>
    </Provider>
  )
}
