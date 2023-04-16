import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { CartProvider } from '@/context/CartContext'
import { Layout } from '@/layout'
import { roboto } from '@/fonts'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <div className={`${roboto.className} antialiased`}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </CartProvider>
    )
}
