import '@/styles/globals.css'
import Header from '@/components/header'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
